export abstract class Middleware<Locals = App.Locals> {

    abstract async handle()

}
