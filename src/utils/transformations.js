export const relayConnectionToArray = connection => (
  connection && connection.edges ? connection.edges.map(edge => edge.node) : []
)