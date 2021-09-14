export const countDownChanged = {
	countDownChanged: (id) {
		let countdown = 10;
		while (countdown != 0) {
		countdown -= 1;
		}
		this.changeAlerts = this.changeAlerts.filter(alert => {
		return alert.id !== id;
		});
		return true;
	}
};