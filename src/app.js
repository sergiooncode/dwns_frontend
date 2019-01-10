import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import CompanyGrid from './CompanyGrid'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ApolloProvider, Query, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { HashRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { relayConnectionToArray } from './utils/transformations'
import CompanyDetail from './CompanyDetail'
import 'normalize.css'
import { withStyles } from '@material-ui/core/styles'
import * as siteCopywriting from './siteCopywriting.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const app = {
	title: "Daddy Wants No Scammy",
	subtitle: "This is some info",
  companies: ["Interrent", "Goldcar-Rhodium"]
}

/*const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ""
    renderApp()
  }
}*/

const appRoot = document.getElementById("app")

const link = createHttpLink({
  uri: 'http://127.0.0.1:8000/graphql'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

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

/*client
  .query({
    query: gql`
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
  })
  .then(result => console.log(relayConnectionToArray(result.data.allCompanies)));*/

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0e4d92' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif',].join(','),
    fontSize: 14,
  },
})

const styles = {}

const CompaniesGridPage = ({ loading, error, data }) => {
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

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
}

const CompaniesGridPageWithData = graphql(GET_ALL_COMPANIES)(CompaniesGridPage)

const GET_EXPERIENCES_BY_COMPANY_GUID = gql`
  query experiencesByCompanyId($companyId: ID!) {
    experience(company_Id: $companyId) {
      edges {
        node {
          company {
            id
            name
          }
          aggravation {
            id
            keyword
          }
          relevantComments
        }
      }
    }
  }
`

const CompanyDetailPage = ({ loading, error, data }) => {
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const experiences = relayConnectionToArray(data.experience)
  const firstExperience = experiences[0]
  const companyName = firstExperience && firstExperience.company.name
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <h2>{`Collected experiences with ${companyName} rental car company`}</h2>
        <CompanyDetail
          detailData={experiences}>
        </CompanyDetail>
      </MuiThemeProvider>
    </div>
  )
}

const CompanyDetailPageWithData = graphql(GET_EXPERIENCES_BY_COMPANY_GUID, {
  options: (props) => {
    return { variables: { companyId: props.companyId } }
  },
})(CompanyDetailPage)

const Home = ({classes}) => {
  const {
    HOME_HEADLINE,
    HOME_MAIN_PARAGRAPH,
    HOME_FEEDBACK_FORM_LINK,
    HOME_FEEDBACK_FORM_URL
  } = siteCopywriting

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <div className={classes.wrapper}>
        <header>
          <h2>
            { HOME_HEADLINE }
          </h2>
        </header>
        <main>
          <article className={classes.mainParagraph}>
            { HOME_MAIN_PARAGRAPH }
          </article>
        </main>
        <div className={classes.formLink}>
          <a target="_blank" href={ HOME_FEEDBACK_FORM_URL }>
            { HOME_FEEDBACK_FORM_LINK }
          </a>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

const homeStyles = {
  wrapper: {
    margin: 25,
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontSize: 14,
  },
  mainParagraph: {
  },
  formLink: {
    margin: 15,
  },
}

const HomeWithStyles = withStyles(homeStyles)(Home)

const Child = ({ match, classes }) => {
  return (
    <div className={classes.wrapper}>
      <CompanyDetailPageWithData companyId={match.params.id} />
    </div>
  )
}

const childStyles = {
  wrapper: {
    margin: 25,
  },
}

const ChildWithStyles = withStyles(childStyles)(Child)

const FormPage = ({classes}) => (
  <MuiThemeProvider theme={theme}>
  <NavBar />
  <div className={classes.wrapper}>
    <h2>
      Please fill out the form about your experience.
    </h2>
    <a target="_blank" href="https://mvpsourcerer.typeform.com/to/XFXgXO">
      Form
    </a>
  </div>
  </MuiThemeProvider>
)

const formPageStyles = {
  wrapper: {
    margin: 25,
  },
}

const FormPageWithStyles = withStyles(formPageStyles)(FormPage)

const renderApp = () => {

  const template = (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={ HomeWithStyles }/>
        {/* <Route path='/companies' component={ CompaniesGridPageWithData }/>
        <Route path='/form' component={ FormPageWithStyles }/>
        <Route path='/companies/:id' component={ ChildWithStyles } /> */}
      </Router>
      {/* <CompaniesGridPage theme={theme} /> */}
    </ApolloProvider>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()