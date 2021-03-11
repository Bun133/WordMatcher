const fs = require('fs')
const file = fs.readFileSync('./jawiki-20210301-all-titles.txt')
const lines = file.toString().split(/[\r\n]+/)
const titles = []
lines.forEach((it) => {
    let s = it.replace('0\t', '')
    titles.push(s)
})
console.log(`WikiPedia Title Length:${titles.length}`)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('何で始まる?', (start) => {
    readline.question('何で終わる?', (end) => {
        let filtered = []
        if (start !== "") {
            titles.filter((it) => {
                    let b = it.startsWith(start)
                    return b
                }
            ).forEach((it) => {
                filtered.push(it)
            })
        } else {
            titles.forEach((it) => {
                filtered.push(it)
            })
        }

        let answer = []
        if (end !== "") {
            filtered.filter((it) => {
                    return it.endsWith(end)
                }
            ).forEach((it) => {
                answer.push(it)
            })
        } else {
            filtered.forEach((it) => {
                answer.push(it)
            })
        }

        console.log(`Filtered Length:${filtered.length}`)
        console.log(`Answer Length:${answer.length}`)
        let s = ""
        answer.forEach((it)=>{
            s += `${it}\n`
        })
        fs.writeFileSync('./answer.txt',s)
        readline.close();
    })
});
