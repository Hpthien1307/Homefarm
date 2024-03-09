export default function GetFile() {
    const inputFile = document.querySelector('input[type=file]');
    
    if (inputFile) {
        const txtElement = document.querySelector('.plc-txt');
        if (txtElement) {
            inputFile.addEventListener('change', function(e) {
                if (e.target.files[0]) {
                    txtElement.textContent = e.target.files[0].name;
                }
            });
        }
    }
}