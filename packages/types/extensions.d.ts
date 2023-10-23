declare module '*.sql' {
    const content: string
    export default content
}

declare module '@packages/locales/*.json' {
    const content: Schema.Localization
    export default content
}
