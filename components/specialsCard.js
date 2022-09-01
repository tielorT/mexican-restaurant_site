import Card from '@mui/material/Card';
import Image from 'next/image'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';




const specialsCard = ({title, description, imgUrl, id}) => {

    return (
   <Card sx={{ maxWidth: 320 }} style={{margin: '10px'}} key={id}>
           <div style={{position: 'relative', minWidth: '100%', height: '200px'}}>
               <Image src={imgUrl} layout='fill' alt=''/>
           </div>
       <CardHeader sx={{ color: 'grey'}}
         title={title}
       />
       <CardContent>
        <p>{description}</p>
       </CardContent>
   </Card>
    )
}

export default specialsCard;