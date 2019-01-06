const GET_ALL_COMPANIES = gql`
  {
    allCompanies {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`