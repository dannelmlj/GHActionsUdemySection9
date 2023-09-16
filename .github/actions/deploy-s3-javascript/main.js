const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


function run(){
    // Get Input Values
    const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('bucket-region', {required: true})
    const distFolder = core.getInput('dist-folder', {required: true})

    // Upload files
    exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`)

    core.notice("Hello from JavaScript")
}

run()