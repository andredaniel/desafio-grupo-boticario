const axios = require('axios')

/**
 *
 * Order statuses
 */
const statuses = ['APPROVED', 'DISAPPROVED', 'IN_VALIDATION']

/**
 *
 * MockAPI base URL
 */
const baseUrl = 'https://5fffb468cb21e10017af7e99.mockapi.io/api'

/**
 *
 * returns a random status
 */
const randomStatus = () => {
  const key = Math.floor(Math.random() * 3)
  return statuses[key]
}

/**
 *
 * Get all orders
 *
 * @param {*} event
 * @param {*} context
 */
const getOrders = async (event) => {
  const userId = event.queryStringParameters.user_id

  try {
    const { data, status } = await axios.get(
      `${baseUrl}/orders/?user_id=${userId}`
    )

    return {
      statusCode: status,
      body: JSON.stringify(data.sort((a, b) => Number(b.id) - Number(a.id))),
    }
  } catch ({ response }) {
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

/**
 *
 * Create order
 *
 * @param {*} event
 * @param {*} context
 */
const createOrder = async (event) => {
  const newOrder = JSON.parse(event.body)
  const orderValue = Number(newOrder.value.replace(/\D+/g, '')) / 100

  newOrder.cashbackAppliedPercentage = Math.ceil(Math.random() * 20)
  newOrder.cashbackReceivedValue =
    (orderValue / 100) * newOrder.cashbackAppliedPercentage
  newOrder.value = orderValue
  newOrder.status = randomStatus()

  try {
    const { data, status } = await axios.post(`${baseUrl}/orders`, newOrder)

    return {
      statusCode: status,
      body: JSON.stringify(data),
    }
  } catch ({ response }) {
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

/**
 *
 * Default handler
 *
 * @param {*} event
 * @param {*} context
 */
exports.handler = async function (event, context) {
  switch (event.httpMethod) {
    case 'GET':
      return getOrders(event, context)

    case 'POST':
      return createOrder(event, context)

    default:
      return {
        statusCode: 501,
      }
  }
}
