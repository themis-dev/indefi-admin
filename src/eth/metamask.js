

const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
};

export const MetaMaskClientConnect = async () => {
    if (!isMetaMaskInstalled()) {
        console.warn('Go to install MetaMask!');
      } else {
        try {
            return await ethereum.request({ method: 'eth_requestAccounts' });
          } catch (error) {
            console.error(error);
          }
      }
}
