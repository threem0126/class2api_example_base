
class ClassA {
    static async hello({name,req}) {
        //console.dir(req)
        return {message: `this is a message from Api: got name [${name}]`}
    }
}

export default ClassA