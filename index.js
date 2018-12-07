const AWS = require('aws-sdk');
const cost = new AWS.CostExplorer({
  accessKeyId: process.env.HACK_HOUR_ACCESS_KEY,
  secretAccessKey: process.env.HACK_HOUR_ACCESS_SECRET,
  region: 'us-east-1'

});

const params = {
  TimePeriod: {
    End: '2019-01-01',
    Start: '2018-01-01'
  },
  Granularity: 'MONTHLY',
  Metrics: ['BlendedCost', 'UnblendedCost', 'UsageQuantity'],
  GroupBy: [
    {
      Type: "DIMENSION",
      Key: "REGION"
    }
  ]
};


cost.getCostAndUsage(params, function(err, data) {
  data.ResultsByTime.map((result) => {
    result.Groups.map((group) => {
      console.log(group);
    })
  })
})
