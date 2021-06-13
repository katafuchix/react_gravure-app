import React from 'react';

import axios from 'axios';
//import Gallery from './Gallery'



export default class GravureList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log('componentDidMount()');
    //axios.get(`https://jsonplaceholder.typicode.com/users`)
    axios.get(`http://gravure-api.mine.nu/gra/index.json`)
      .then(res => {
        const persons = res.data;
        console.log(res);
        console.log(res.data);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns is-vcentered is-multiline">
              {this.state.persons.map((person) => {
                return (
                  <div key={person.id} className="column is-3">
                    <img src={'http://gravure-api.mine.nu/' + person.image_path + '/' + person.image} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    )
  }
/*
  render() {
    return (
      <div class="row">
         <div class="col-md-4">
           <div class="card mb-4 shadow-sm">
             <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap" />
             <div class="card-body">
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                 </div>
                 <small class="text-muted">9 mins</small>
               </div>
             </div>
           </div>
         </div>
         <div class="col-md-4">
           <div class="card mb-4 shadow-sm">
             <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap" />
             <div class="card-body">
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                 </div>
                 <small class="text-muted">9 mins</small>
               </div>
             </div>
           </div>
         </div>
         <div class="col-md-4">
           <div class="card mb-4 shadow-sm">
             <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap" />
             <div class="card-body">
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                 </div>
                 <small class="text-muted">9 mins</small>
               </div>
             </div>
           </div>
         </div>
        </div>
    )
  }
*/
}

/*
function Gallery(props) {
  const { items } = props;
  return (
    <div className="columns is-vcentered is-multiline">
    {items.map((url) => {
      return (
        <div key={url} className="column is-3">
          <img src={url} />
        </div>
      );
    })}
    </div>
  );
}
*/
//export default Gallery;
