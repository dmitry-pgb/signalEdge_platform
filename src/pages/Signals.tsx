function TradingViewWidget() {
  return (
    <div className="rounded-lg border border-neutral-800 overflow-hidden">
      <iframe
        title="TradingView"
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e6b4e&symbol=BINANCE:BTCUSDT&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en"
        className="w-full h-[600px]"
        allowTransparency
      />
    </div>
  )
}

export default function Signals() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Signals</h2>
      <TradingViewWidget />
      <p className="text-neutral-400 text-sm">
        Disclaimer: This content is for educational purposes only and does not constitute financial advice. Past performance does not guarantee future results.
      </p>
    </div>
  )
}


