//asked by Amazon defang an ip address
//Ex. 127.0.0.1 -> 127[.]0[.]0[.]1

function defangIP(ip) {
	return ip = ip.split(".").join("[.]");
}