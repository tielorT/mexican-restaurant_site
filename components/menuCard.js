import Card from '@mui/material/Card';
import Image from 'next/image'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const menuCard = ({title, description, price, imgUrl, id}) => {

    return (
   <Card sx={{ maxWidth: 320 }} style={{margin: '10px'}} key={id}>
           <div style={{position: 'relative', minWidth: '100%', height: '200px'}}>
               <Image src={imgUrl} layout='fill' alt=''/>
           </div>
       <CardHeader
         title={title}
         subheader={description} 
       />
       <CardContent>
           <span>${price}</span><br/>
           <Button style={{padding: '0px', color: '#FF9378',fontWeight: 'bold'}}
                   className='snipcart-add-item'
                   data-item-id={title}
                   data-item-url={'localhost:3000/menu'}
                   data-item-price={price}
                   data-item-description={description}
                   data-item-image={imgUrl}
                   data-item-name={title}>Order Now</Button>
       </CardContent>
   </Card>
    )
}

export default menuCard;