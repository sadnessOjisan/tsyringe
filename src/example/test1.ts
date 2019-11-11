import { container } from ".."
import { injectable } from '../decorators'

class Hoge {
    call(){
        console.log('this is a HOGE')
    }
}

@injectable()
class Foo {
    hoge: Hoge

    constructor(hoge: Hoge){
        this.hoge = hoge
    }
}

@injectable()
class Bar {
    foo: Foo
    constructor(foo: Foo){
        this.foo = foo 
    }
}

const bar = container.resolve(Bar)

bar.foo.hoge.call()