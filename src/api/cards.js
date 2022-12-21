const url = 'https://63a215d7ba35b96522efbca1.mockapi.io/pins'
export async function getCards() {
  const response = await fetch(url)
  const data = await response.json()
  return data
}