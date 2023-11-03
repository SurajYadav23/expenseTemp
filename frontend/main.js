const form = document.getElementById('form');

form.addEventListener('submit', store);

async function store(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const desc = document.getElementById('desc').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;

  const itemData = {
    name: name,
    desc: desc,
    price: price,
    quantity: quantity,
  };

  console.log(itemData);

  try {
    const response = await axios.post('http://localhost:3000/items', itemData);
    showOnScreen(response.data);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  const itemArryData = await axios.get('http://localhost:3000/items');
  console.log(itemArryData);

  for (var i = 0; i < itemArryData.data.length; i++) {
    showOnScreen(itemArryData.data[i]);
  }
});

function showOnScreen(item) {
  document.getElementById('name').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';
  const parentNode = document.getElementById('items');
  const childHtml = `<li id=${item.id}>item_name: ${item.name}, desc: ${
    item.desc
  }, price: ${item.price}, quantity: ${item.quantity}
  <button onClick=buyOne(${JSON.stringify(item)})>buyOne</button>
  <button onClick=buyTwo(${JSON.stringify(item)})>buyTwo</button>
  <button onClick=remove(${JSON.stringify(item)})>REMOVE ITEM</button>
  </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

function removeItemFromScreen(itemId) {
  const parentNode = document.getElementById('items');
  const childNodeTobeDeleted = document.getElementById(itemId);
  parentNode.removeChild(childNodeTobeDeleted);
}

async function buyOne(item) {
  if (item.quantity <= 0) {
    return show('Item is not available ');
  }

  const itemData = {
    name: item.name,
    desc: item.desc,
    price: item.price,
    quantity: item.quantity - 1,
  };

  console.log(itemData);
  removeItemFromScreen(item.id);

  try {
    await axios.put(`http://localhost:3000/items/${item.id}`, itemData);
    const response = await axios.get(`http://localhost:3000/items/${item.id}`);
    showOnScreen(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function buyTwo(item) {
  if (item.quantity <= 0) {
    return show('Item is not available now');
  }

  const itemData = {
    name: item.name,
    desc: item.desc,
    price: item.price,
    quantity: item.quantity - 2,
  };

  console.log(itemData);
  removeItemFromScreen(item.id);

  try {
    await axios.put(`http://localhost:3000/items/${item.id}`, itemData);
    const response = await axios.get(`http://localhost:3000/items/${item.id}`);
    showOnScreen(response.data);
  } catch (error) {
    console.error(error);
  }
}

function show(message) {
  alert(message);
}

async function remove(item) {
  try {
    await axios.delete(`http://localhost:3000/items/${item.id}`);
  } catch (error) {
    console.error(error);
  }
  removeItemFromScreen(item.id);

}
