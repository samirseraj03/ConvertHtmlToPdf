

document.getElementById('convert').addEventListener('click', async () => {



    try {
        // Obtiene la pestaña activa
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
        // Ejecuta el script empaquetado de Webpack (content.bundle.js)
        await chrome.scripting.executeScript({
            target: { tabId: tab.id }, 
            files: ['dist/content.bundle.js'],
           
        });

        // Luego, envía el mensaje al content script para iniciar la conversión
        chrome.tabs.sendMessage(tab.id, { action: 'convertToPDF' });
        
    } catch (error) {
        console.error('Error al convertir a PDF:', error);
    }
});