function collect_same_elements(collection_a, object_b) {
	var arr = object_b.value,
		flag = 0,
		collection = new Array();
	for (var i = 0, length = collection_a.length; i < length; i++) {
		for (var j = 0, len = arr.length; j < len; j++) {
			if (collection_a[i].key == arr[j]) {
				collection[flag] = collection_a[i].key;
				flag++;
			}
		}
	}
	return collection;
}

module.exports = collect_same_elements;