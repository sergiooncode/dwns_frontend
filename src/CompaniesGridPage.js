import React, { Component } from 'react'
import Query from 'react-apollo'
import gql from 'graphql-tag'
import NavBar from './NavBar'
import CompanyGrid from './CompanyGrid'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { relayConnectionToArray } from './utils/transformations'

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

const CompaniesGridPage = () => {
    return (
    <Query query={GET_ALL_COMPANIES}>
      {({ loading, error, data }) => {
        if (loading) return "Loading..."
        if (error) return `Error! ${error.message}`;
  
        return (
          <div>
            <MuiThemeProvider theme={theme}>
              <NavBar />
              <CompanyGrid
                title="Rental Car Companies"
                allCompanies={relayConnectionToArray(data.allCompanies)}
              />
            </MuiThemeProvider>
          </div>
        )
      }}
    </Query>
    )
}

export default withStyles(styles)(CompaniesGridPage)
