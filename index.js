const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: 'env', alias: "e", type: String, defaultValue: "local" },
    { name: 'files', alias: "t", type: String, multiple: true },
    { name: 'help', alias: "h", type: Boolean },
    { name: 'new', alias: "n", type: Boolean },
    { name: 'size', alias: "s", type: Number, defaultValue: 100 }
]

const options = commandLineArgs(optionDefinitions, { partial: true });

if (options.help || options._unknown) {
    if (options._unknown) {
        console.log("Unknown options:", options._unknown);
    }

    const usage = require('command-line-usage');

    const sections = [
        {
            header: 'My CLI',
            content: 'description'
        },
        {
            header: 'Options',
            optionList: [
                {
                    name: 'new',
                    alias: "n"
                },
                {
                    name: 'size',
                    alias: "s",
                    description: 'Batch Size, default is 100'
                },
                {
                    name: 'files',
                    alias: "f",
                    multiple: true,
                    typeLabel: '[underline]{file} ...'
                },
                {
                    name: 'env',
                    alias: "e",
                    description: 'Environment, default is local'
                },
                {
                    name: 'help',
                    alias: "h",
                    description: 'Print the usage guide'
                }
            ]
        },
        {
            header: 'Examples',
            content: [
                {
                    desc: "env",
                    example: "my-cli --env dev"
                },
                {
                    desc: "files",
                    example: "my-cli --files a.txt b.txt"
                }
            ]
        },
    ]

    console.log(usage(sections))
} else {
    // Do some jobs
}