import React, { Component } from 'react'

export class SearchInput extends Component {
    state = { entry: '' }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" placeholder='search images' value={this.state.entry} onChange={(event) => { this.setState({ entry: event.target.value }) }} />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchInput;



// Same logic applied but with Functional component
// const SearchInput = () => {
//     const [entry, setEntry] = useState('')
//     return (
//         <div className="ui segment">
//         <form onSubmit={e=>{e.preventDefault()}} className="ui form">
//             <div className="field">
//                 <div className="ui massive icon input">
//                     <input type="text" placeholder='Serch images..' value={entry} onChange={e=>setEntry(e.target.value)} />
//                     <i className="search icon"></i>
//                 </div>
//             </div>
//         </form>
//     </div>
//     )
// }

// export default SearchInput


