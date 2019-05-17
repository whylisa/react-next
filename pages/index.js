
import Layout from '../components/MyLayout.js'

import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
	<Layout>
	  <h1> bataman tv show </h1>
	  <ul>
	  {props.shows.map(({show}) => (
	  	<li key={show.id}>
	  	   <Link as={`/p/${show.id}`}
	  	         href={`/post?id=${show.id}`}>
	  	   <a>{show.name}</a>
	  	   </Link>
	  	</li>
	  ))}
	  </ul>
	</Layout>
)

Index.getInitialProps = async function(){
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const data = await res.json()
	console.log(`show data fetch${data.length}`)
	return {
		shows: data
	}
}

export default Index