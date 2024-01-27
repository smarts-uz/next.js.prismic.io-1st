export  default function CustomerCategory({category}){
    return(
        <>
        <div style={{'display':'flex', 'gap':'50px'}} > 

<div>
<h1>{category[0].id}</h1>
  <h1>{category[1].id}</h1>
  <h1>{category[2].id}</h1>
  <h1>{category[3].id}</h1>
</div>
<div>
<h1>{category[0].name}</h1>
  <h1>{category[1].name}</h1>
  <h1>{category[2].name}</h1>
  <h1>{category[3].name}</h1>

</div>
<div>
<h1>{category[0].email}</h1>
  <h1>{category[1].email}</h1>
  <h1>{category[2].email}</h1>
  <h1>{category[3].email}</h1>

</div>
</div>
     
        </>
    )
  }