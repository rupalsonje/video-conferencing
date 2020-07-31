module.exports = User

// Creates a user with the specified attributes.
function User (data) {
    console.log('user created');
    data = data || {}
    this.name = 'Anonymous'

    let divider = document.createElement("div");
    this.nameElement = document.createTextNode(this.name);
    this.nameElement.textContent = this.name;
    let br = document.createElement("br");

    this.element = document.createElement('video')
    Object.assign(this.element.style, {
        width: '640px',
        height: '360px',
        position: 'relative',
        transform: 'rotateY(180deg)'
    })

    divider.appendChild(this.nameElement);
    divider.appendChild(br);
    divider.appendChild(this.element);
    document.getElementById('videos').appendChild(divider);
}

// Adds the peers stream to their video element and plays it.
User.prototype.addStream = function (stream) {
    this.element.srcObject = stream;
    this.element.play();
}

// Allows for updating the user object.
User.prototype.update = function (data) {
    data = data || {}
    this.name = data.name || this.name
    this.nameElement.textContent = this.name;
}