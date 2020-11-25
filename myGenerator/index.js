const parser = require('@asyncapi/parser');
const path = require('path');
const Generator = require('@asyncapi/generator');
const generator = new Generator('@asyncapi/html-template', path.resolve(__dirname, ''));

async function main() {
    try {
        // const doc = await parser.parse(generator);
        // const doc = await parser.parse(`
        //     asyncapi: '2.0.0'
        //     info:
        //         title: Example
        //         version: '0.1.0'
        //     channels:
        //         example-channel:
        //         subscribe:
        //             message:
        //             payload:
        //                 type: object
        //                 properties:
        //                 exampleField:
        //                     type: string
        //                 exampleNumber:
        //                     type: number
        //                 exampleDate:
        //                     type: string
        //                     format: date-time
        // `);
        // await generator.generateFromString(doc);
        await generator.generateFromURL('https://raw.githubusercontent.com/asyncapi/asyncapi/2.0.0/examples/2.0.0/streetlights.yml');

        // console.log(doc.info().title());
    } catch (error) {
        console.error(error)
    }
}

main();