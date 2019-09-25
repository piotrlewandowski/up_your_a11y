import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './style.css'
import contributeStyle from './contribute-to-a11y-in-oss.module.css'
import axios from 'axios'

class A11yOSSContributionsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      issues: [],
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://api.github.com/search/issues?q=a11y+accessibility+type:issue+is:open+is:public+language:javascript+language:html+archived:false+no:assignee+label:"help wanted"+sort:updated&per_page=100`
      )
      .then(response => {
        const { data } = response
        console.log(response)
        const safeItems = data.items || []
        this.setState({ loading: false, issues: safeItems })
      })
      .catch(e => {
        console.warn(e)
      })
  }

  render() {
    const { loading, issues } = this.state

    const issueCards = issues.map(x => {
      const contract = x.body.length > 200
      const preview = contract ? `${x.body.substr(0, 200)}...` : x.body

      const lastUpdate = new Date(x['updated_at'])
      const updatedFormatted = lastUpdate.toLocaleDateString()

      return (
        <li key={x.id}>
          <div className={contributeStyle.issueCard}>
            <h3 className={contributeStyle.issueHeader}>{x.title}</h3>
            <p className={contributeStyle.lastUpdated}>
              Last updated: {updatedFormatted}
            </p>
            <p>{preview}</p>
            <a
              href={x['html_url']}
              aria-label={`Visit issue: ${x.title}`}
              className={contributeStyle.issueLink}
            >
              Visit this issue
            </a>
          </div>
        </li>
      )
    })

    return (
      <Layout location={this.props.location}>
        <SEO title="Contribute to A11y Issues in OSS" />
        <h1>Open A11y OSS Issues Looking for Help</h1>
        <p>
          Sometimes it's hard to know where to start in contributing to Open
          Source Software, and often you might not have a particular repository
          in mind that you'd like to contribute to.
        </p>
        <p>
          If you're passionate about accessibility, you might like to consider
          taking on open issues that will help improve the accessibility of an
          OSS project.
        </p>
        <p>
          To help make this as easy as possible, we've listed below current
          issues referencing accessibility that are looking for help. Follow the
          links below to find out more about how you could contribute.
        </p>
        <p>
          <strong>The list below includes open issues:</strong>
        </p>
        <ul>
          <li>From open source GitHub projects</li>
          <li>Referencing 'a11y' or 'accessibility'</li>
          <li>Labelled with "Help wanted"</li>
          <li>No assignee or pull request yet</li>
          <li>Utilising JavaScript or HTML</li>
        </ul>
        <p>The most recently updated issues will appear first.</p>
        <section className={contributeStyle.listSection}>
          <h2>Current Open Issues from GitHub</h2>
          <div
            style={{ display: loading ? 'block' : 'none' }}
            className={contributeStyle.loader}
            role="alert"
          />
          <p className={contributeStyle.spinnerCopy} aria-live="assertive">
            {loading
              ? 'Open O.S.S. issues are loading...'
              : 'Open O.S.S. issues have finished loading.'}
          </p>

          <div className={contributeStyle.listWrapper}>
            <ul className={contributeStyle.issueList}>{issueCards}</ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default A11yOSSContributionsPage