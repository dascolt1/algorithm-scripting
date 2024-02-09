function lifeRafts(weights, limits) {
	weights = weights.sort();

	let pointer1 = 0;
	let pointer2 = weights.length - 1;

	let rafts = 0;

	while(pointer1 <= pointer2) {
		if(weights[pointer2] + weights[pointer1] <= limit) pointer1++;

		pointer2--;

		lifeRafts++;
	}

	return lifeRafts;
}