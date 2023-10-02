const t = document.querySelector("#t");
const a = document.querySelector("#a");
const u = JSON.parse(localStorage.getItem("u")) || [];

const s = () => {
  localStorage.setItem("u", JSON.stringify(u));
  r();
};

const n = (u, b) => {
  const d = {
    i: u.length,
    u,
    b,
  };

    u.push(d);
  s();
};

const e = (i) => {
  let b = Number(prompt("Enter new balance"));
  while (isNaN(b))
    b = Number(prompt("Enter new balance (must be a number)"));

  const x = u.findIndex((d) => d.i === i);
  if (x === -1) alert("User not found");
  else {
    u[x].b = b;
    s();
  }
};

const d = (i) => {
  const x = u.findIndex((d) => d.i === i);
  if (x === -1) alert("User not found");
  else {
    u.splice(x, 1);
    s();
  }
};

const r = () => {
  const m = u.map(
    (d) => `<tr>
    <th scope="row">${d.i}</th>
    <td>${d.u}</td>
    <td>${d.b}</td>
    <td><button onclick=e(${d.i}) class="btn btn-warning">Edit</button></td>
    <td><button onclick=d(${d.i}) class="btn btn-danger">Delete</button></td>
  </tr>`
  );

  t.innerHTML = m.join("");
};

r();

a.addEventListener("click", () => {
  const u = prompt("Enter username");
  let b = Number(prompt("Enter initial balance"));
  while (isNaN(b))
    b = Number(prompt("Enter initial balance (must be a number)"));
  n(u, b);
});