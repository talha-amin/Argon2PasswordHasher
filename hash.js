const argon2 = require ("argon2")
const readline = require ("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("enter your password",async(password) => {
    const hash = await argon2.hash(password,{type: argon2.argon2id})
    console.log(`hash: ${hash}`)

    rl.question("Re-Enter your password:" ,async (pw) => {
        const correct  = await argon2.verify(hash,pw)
        console.log(correct ? "Correct " : "Incorrect")
        process.exit(0)
    } )
})