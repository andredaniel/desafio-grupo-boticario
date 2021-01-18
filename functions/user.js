const axios = require('axios')

const randomStatus = () => {
  const key = Math.floor(Math.random() * 3)

  const statuses = ['APPROVED', 'DISAPPROVED', 'IN_VALIDATION']

  return statuses[key]
}

exports.handler = async function (event, context) {
  const baseUrl = 'https://5fffb468cb21e10017af7e99.mockapi.io/api'

  if (event.httpMethod === 'GET') {
    const { data } = await axios.get(
      `${baseUrl}/orders/?user_id=${event.queryStringParameters.user_id}`
    )

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }

  if (event.httpMethod === 'POST') {
    const newOrder = JSON.parse(event.body)

    newOrder.cashbackAppliedPercentage = Math.ceil(Math.random() * 20)
    newOrder.cashbackReceivedValue =
      (newOrder.value / 100) * newOrder.cashbackAppliedPercentage
    newOrder.status = randomStatus()

    const { data } = await axios.post(`${baseUrl}/orders`, newOrder)

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }
}
