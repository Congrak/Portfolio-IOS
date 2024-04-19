import toast from 'react-hot-toast';
export const handleDownload = () => {
    
    const PDF_FILE = '/Rodrigo_Celis_2.0.pdf'

    const link = document.createElement('a');
    link.href = PDF_FILE;
    link.target = '_blank';
    link.download = 'Rodrigo_Celis_2.0.pdf';
    link.click();
    toast.success('CV Downloaded!');
}