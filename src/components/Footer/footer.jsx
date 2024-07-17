import Stack from 'react-bootstrap/Stack';
import './footer.css';

const Footer = () => {
    return (
        <Stack direction="horizontal" gap={3} className='stack'>
            footer
            <div className='p-2'>HTML5</div>
            <div className='p-2'>CSS3</div>
            <div className='p-2'>Javascript</div>
            <div className='p-2'>ReactJs</div>
            <div className='p-2'>NodeJs</div>
        </Stack>
    );
}

export default Footer;