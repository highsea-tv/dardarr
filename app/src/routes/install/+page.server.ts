/** @type {import('./$types').Actions} */
export const actions = {

    system: async (event) => {

        const { default: updateSystem } = await import('@packages/schema/sql/updateSystem.sql')
        
        const formData = Object.fromEntries(await event.request.formData())
        console.log(formData)

        await event.locals.db.run(updateSystem, formData.language, formData.timezone)

    }

}
