interface IConfig {
  RABBITMQ_URI: string,
  RABBITMQ_QUEUE_NAME: string,
  RABBITMQ_QUEUE_DURABLE: boolean,
  RABBITMQ_EXCHANGE_NAME: string,
  RABBITMQ_EXCHANGE_TYPE: string,
  RABBITMQ_EXCHANGE_DURABLE: boolean,
  RABBITMQ_ROUTING_KEY: string,
  API_USERS_URI: string,
}

const config: IConfig = {
  RABBITMQ_URI: "amqp://guest:guest@localhost:5672",
  RABBITMQ_QUEUE_NAME: "users-requested",
  RABBITMQ_QUEUE_DURABLE: false,
  RABBITMQ_EXCHANGE_NAME: "users",
  RABBITMQ_EXCHANGE_TYPE: "fanout",
  RABBITMQ_EXCHANGE_DURABLE: true,
  RABBITMQ_ROUTING_KEY: "users",
  API_USERS_URI: "https://jsonplaceholder.typicode.com/users",
}

export default config 