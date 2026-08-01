/* Форматирование числа с разделителем
* @param integer n: длина десятичного числа
* @param integer x: длина всей части
* @parammixed s: разделитель разделов
* @param смешанный c: десятичный разделитель
*/
Number.prototype.formatMoney = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
/**
12345678.9.format(2, 3, '.', ',');  // "12.345.678,90"
123456.789.format(4, 4, ' ', ':');  // "12 3456:7890"
12345678.9.format(0, 3, '-');       // "12-345-679
**/

function sequenceValue(n) {
    const a1 = 20;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        sum += 49 + i;
    }

    return a1 + sum;
}

window.__crazySdkReady = new Promise((resolve, reject) => {
	const sdkElem = document.createElement("script");
	sdkElem.type = "text/javascript";
	sdkElem.src = "./_crazygames/crazygames-sdk-v3.js";
	sdkElem.onload = () => resolve();
	sdkElem.onerror = () => reject(new Error("Failed to load CrazyGames SDK"));
	document.body.appendChild(sdkElem);
});

window.__ensureCrazySdk = async function() {
	await window.__crazySdkReady;
	if (!window.CrazyGames || !window.CrazyGames.SDK) {
		throw new Error("CrazyGames SDK missing after load");
	}
	await window.CrazyGames.SDK.init();
	return window.CrazyGames.SDK;
};
