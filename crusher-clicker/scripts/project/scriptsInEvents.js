


const scriptsInEvents = {

	async Mainevents_Event2_Act1(runtime, localVars)
	{
		try { await window.__ensureCrazySdk(); } catch (e) { console.warn(e); }
	},

	async Mainevents_Event2_Act3(runtime, localVars)
	{
		try { window.CrazyGames.SDK.game.gameplayStart(); } catch (e) { console.warn(e); }
	},

	async Mainevents_Event33_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatMoney(0,"3"," ", ",")));
	},

	async Mainevents_Event34_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatMoney(1,"3"," ", ",")));
	},

	async Mainevents_Event63_Act1(runtime, localVars)
	{
		window.addEventListener("wheel", (event) => event.preventDefault(), {
		  passive: false,
		});
		
		window.addEventListener("keydown", (event) => {
		  if (["ArrowUp", "ArrowDown", " "].includes(event.key)) {
		    event.preventDefault();
		  }
		});
	},

	async Mainevents_Event68_Act1(runtime, localVars)
	{
		try {
			window.CrazyGames.SDK.data.setItem(runtime.globalVars.ИмяСохранения, localVars.данные);
		} catch (e) {
			try { localStorage.setItem(runtime.globalVars.ИмяСохранения, localVars.данные); } catch (_) {}
		}
	},

	async Settingsevents_Event2_Act1(runtime, localVars)
	{
		try { window.CrazyGames.SDK.game.gameplayStop(); } catch (e) { console.warn(e); }
	},

	async Settingsevents_Event3_Act1(runtime, localVars)
	{
		try { window.CrazyGames.SDK.game.gameplayStart(); } catch (e) { console.warn(e); }
	},

	async Settingsevents_Event5_Act1(runtime, localVars)
	{
		function updateSliderThumbSize(s) {
		    let slider = document.querySelector(s);
		    if (slider) {
		        if (window.innerWidth < 600) {
		            slider.style.setProperty('--thumb-width', '18px');
		            slider.style.setProperty('--thumb-height', '18px');
					slider.style.setProperty('--top', '-8px');
		        } else if (window.innerWidth >= 600 && window.innerWidth < 1200) {
		            slider.style.setProperty('--thumb-width', '25px');
		            slider.style.setProperty('--thumb-height', '25px');
					slider.style.setProperty('--top', '-12px');
		        } else {
		            slider.style.setProperty('--thumb-width', '30px');
		            slider.style.setProperty('--thumb-height', '30px');
					slider.style.setProperty('--top', '-14px');
		        }
		    }
		}
		
		// Обновить стили при загрузке страницы
		updateSliderThumbSize('#mySlider');
		updateSliderThumbSize('#mySlide');
		updateSliderThumbSize('#SliderLevel');
	},

	async Adevents_Event2_Act1(runtime, localVars)
	{
		try { window.CrazyGames.SDK.game.gameplayStart(); } catch (e) { console.warn(e); }
	},

	async Adevents_Event3_Act1(runtime, localVars)
	{
		try { window.CrazyGames.SDK.game.gameplayStop(); } catch (e) { console.warn(e); }
	},

	async Adevents_Event5_Act2(runtime, localVars)
	{
		const callbacks = {
		  adFinished: () => runtime.callFunction("FinishAd", runtime.globalVars.УидКнопки),
		  adError: () => runtime.callFunction("ErrorAd"),
		  adStarted: () => runtime.callFunction("StartAd"),
		};
		try {
			window.CrazyGames.SDK.ad.requestAd("rewarded", callbacks);
		} catch (e) {
			callbacks.adFinished();
		}
	},

	async Offlineevent_Event15_Act1(runtime, localVars)
	{
		runtime.layout.getLayer(localVars.имя_слоя).isVisible=0;
	},

	async Startevents_Event1_Act2(runtime, localVars)
	{
		try { await window.__ensureCrazySdk(); } catch (e) { console.warn(e); }
	},

	async Startevents_Event1_Act4(runtime, localVars)
	{
		try {
			const data = window.CrazyGames.SDK.data.getItem(runtime.globalVars.ИмяСохранения);
			if (data) runtime.objects.DataObject.getFirstInstance().setJsonString(data);
		} catch (e) {
			try {
				const data = localStorage.getItem(runtime.globalVars.ИмяСохранения);
				if (data) runtime.objects.DataObject.getFirstInstance().setJsonString(data);
			} catch (_) {}
		}
	},

	async Startevents_Event1_Act5(runtime, localVars)
	{
		try {
			runtime.globalVars.SaveTry = window.CrazyGames.SDK.data.getItem(runtime.globalVars.ИмяСохранения)
		} catch (e) {
			try { runtime.globalVars.SaveTry = localStorage.getItem(runtime.globalVars.ИмяСохранения); } catch (_) {}
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;
