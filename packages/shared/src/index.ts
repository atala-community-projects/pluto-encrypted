import { MangoQuerySelector, RxDocumentData } from "rxdb";



export function conditionMatches<RxDocType>(selector: MangoQuerySelector<RxDocType>, key: string, document: RxDocumentData<RxDocType>) {
    if (key === "$and") {
        const matchingSelector = selector[key]!
        const matches = Object.values(matchingSelector).every((condition) => {
            const [conditionKey] = Object.keys(condition);
            const [conditionValue] = Object.values(condition);
            if (conditionKey === "$or") {
                return conditionValue!.some((orSelector) => {

                    return conditionMatches(orSelector, "$or", document)
                })
            } else if (conditionKey === "$and") {
                return conditionValue!.every((orSelector) => conditionMatches(orSelector, "$or", document))
            } else if (document[conditionKey!] === conditionValue) {
                return true;
            }

            return false;
        })
        if (matches) {
            return true
        }
    } else if (key === "$or") {
        const matchingSelector = Object.keys(selector)
        const atLeastOneMatching = matchingSelector.find((conditionKey) => {
            if (conditionKey === "$or") {
                const matchingOrKey = selector[conditionKey]?.find((orKey) => {
                    const [orKeyName] = Object.keys(orKey)
                    const [orKeyValue] = Object.values(orKey)
                    return document[orKeyName!] === orKeyValue
                })
                if (matchingOrKey) {
                    return true;
                }
            } else if (conditionKey === "$and") {
                const matchingAndKey = selector[conditionKey]?.find((andKey) => {
                    const [andKeyName] = Object.keys(andKey)
                    const [andKeyValue] = Object.values(andKey)
                    return document[andKeyName!] === andKeyValue
                });
                if (matchingAndKey) {
                    return true;
                }
            } else {
                const conditionValue = selector[conditionKey]
                if (document[conditionKey!] === conditionValue) {
                    return true;
                }
            }
            return false;
        })
        if (atLeastOneMatching) {
            return true
        }
    } else {
        const selectorValue = selector[key]
        if (typeof selectorValue === "object") {
            const selectorQueries = Object.keys(selectorValue)
            const [value] = Object.values(selector[key])
            for (let selectorQuery of selectorQueries) {
                if (selectorQuery === "$eq") {
                    if (document[key] === value) {
                        return true

                    }
                }
            }
        }
    }
    return false
}