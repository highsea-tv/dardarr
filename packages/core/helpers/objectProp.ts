export function objectProp<
ObjectType extends object, 
Selector extends string>(object: ObjectType, selector: Selector) {
    return (selector as string).split('.').reduce((a, b) => a[b], object)
}
