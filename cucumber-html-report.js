const report = require('multiple-cucumber-html-reporter');
var datetime = new Date()
datetime = datetime.toString()
datetime = datetime.split(" ")
datetime =datetime[0]+' '+datetime[1]+' '+datetime[2]+' '+datetime[3]+' '+datetime[4]+' '+datetime[5]+' (IST)'
report.generate({
    jsonDir: "BDDCucumberReport/Report/cucumber-json",  // ** Path of .json file **//
    reportPath: "BDDCucumberReport/Report", // ** Path of .html file **//
    
	metadata:{
        browser: {
            name: 'chrome',
            version: 'chrome 98.0.4758.102'

        },
        device: 'Remote',
        platform: {
            name: 'Windows',
            version: '10'
            

        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Well UI Automation'},
            {label: 'Environment', value: 'Test'},
            {label: 'Version', value: 'V2'},
            {label: 'Report At', value: datetime},
           
        ]
    }
});
