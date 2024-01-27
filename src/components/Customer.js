

export default function Customer( {customer}) {
    return (
<>

<div style={{'display':'flex', 'gap':'50px'}} > 

<div>
<h1>{customer[0].id}</h1>
  <h1>{customer[1].id}</h1>
  <h1>{customer[2].id}</h1>
  <h1>{customer[3].id}</h1>
</div>
<div>
<h1>{customer[0].name}</h1>
  <h1>{customer[1].name}</h1>
  <h1>{customer[2].name}</h1>
  <h1>{customer[3].name}</h1>

</div>
<div>
<h1>{customer[0].email}</h1>
  <h1>{customer[1].email}</h1>
  <h1>{customer[2].email}</h1>
  <h1>{customer[3].email}</h1>

</div>
</div>


</>
    );
  }


 