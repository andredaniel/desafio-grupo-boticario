const axios = require('axios')

const randomStatus = () => {
  const key = Math.floor(Math.random() * 3)

  const statuses = ['APPROVED', 'DISAPPROVED', 'IN_VALIDATION']

  return statuses[key]
}

exports.handler = async function (event, context) {
  const baseUrl = 'https://5fffb468cb21e10017af7e99.mockapi.io/api'

  if (event.httpMethod === 'GET') {
    const userId = event.queryStringParameters.user_id
    const { data } = await axios.get(`${baseUrl}/orders/?user_id=${userId}`)

    return {
      statusCode: 200,
      body: JSON.stringify(data.sort((a, b) => Number(b.id) - Number(a.id))),
    }
  }

  if (event.httpMethod === 'POST') {
    const newOrder = JSON.parse(event.body)
    const orderValue = Number(newOrder.value.replace(/\D+/g, '')) / 100

    newOrder.cashbackAppliedPercentage = Math.ceil(Math.random() * 20)
    newOrder.cashbackReceivedValue =
      orderValue / 100 * newOrder.cashbackAppliedPercentage
    newOrder.value = orderValue
    newOrder.status = randomStatus()

    const { data } = await axios.post(`${baseUrl}/orders`, newOrder)

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }
}
