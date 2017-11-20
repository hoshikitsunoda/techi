const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/techi'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const description = db.collection('description')
  const image = db.collection('image')
  const name = db.collection('name')

  description
    .insertMany([
      {
        "description": "Descriptions for employee feed",
        "employees": [
          {
            "id": 1,
            "title": "Project Manager",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a tellus vel libero consectetur iaculis ac eu lacus. Nam in nisi nulla. Duis accumsan est eu leo volutpat, et sollicitudin est faucibus. Vivamus pellentesque justo sed leo tristique fringilla. In ac nibh dignissim, hendrerit velit vitae, egestas metus. Maecenas vulputate nisl lacus, et suscipit dolor finibus ut. Ut ut ultrices metus. Phasellus nec auctor nulla, eu tempor felis. Nulla vel pulvinar sapien, eu malesuada massa. "
          }, {
            "id": 2,
            "title": "Designer",
            "description": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc venenatis odio non mattis tempor. Cras turpis enim, congue vel felis ac, elementum varius arcu. Vivamus sit amet nibh eros. Phasellus varius tincidunt magna ut vulputate. Proin ornare rhoncus enim, et imperdiet tellus vulputate at. Aliquam feugiat velit vel laoreet condimentum. Nullam ut quam nibh. Nam tellus ante, molestie vitae lacus id, malesuada lobortis quam. Praesent a neque ut ipsum varius rhoncus eu eu lectus."
          }, {
            "id": 6,
            "title": "Evangelist",
            "description": "Ut a ultricies dolor. Duis porttitor enim nec magna ornare, in venenatis nisi porttitor. Nunc consequat ante vitae ante finibus, non accumsan eros ornare. Praesent diam neque, egestas ac lacinia vestibulum, fringilla luctus orci. Donec a accumsan metus, vel semper enim. Nunc ipsum ante, ornare eget venenatis molestie, ornare id libero. In purus tellus, posuere et tortor eget, consectetur accumsan felis. Donec id hendrerit magna, ac tincidunt lacus. Ut eget magna a felis aliquam iaculis."
          }, {
            "id": 4,
            "title": "Junior Web Developer",
            "description": "Sed malesuada rhoncus volutpat. Suspendisse eget metus sed justo finibus eleifend. Cras turpis mi, blandit nec hendrerit in, aliquam a sapien. Etiam molestie mi in quam suscipit, sed pulvinar dolor venenatis. Nullam eu lectus urna. Curabitur tortor lorem, lobortis at enim vitae, semper ultrices nibh. Nulla pharetra id tellus vitae rutrum. In quis elit in justo pharetra cursus. Quisque magna nulla, pulvinar nec convallis sagittis, condimentum vitae odio. Vestibulum porta, nunc ac accumsan."
          }, {
            "id": 5,
            "title": "Web Developer",
            "description": "Cras ac eleifend erat. Pellentesque convallis, turpis at rhoncus suscipit, velit libero sollicitudin ligula, id porta sem risus eget ligula. In elit lacus, fermentum eu fringilla non, elementum non leo. Integer ut placerat lorem. Maecenas quis lectus semper urna vulputate pellentesque a at ante. Nulla maximus convallis pharetra. Fusce malesuada id dui vitae vehicula. Duis ornare eleifend mauris, in consequat magna dignissim eu. Etiam tristique, augue eget euismod congue, est massa tempus."
          }, {
            "id": 7,
            "title": "Accounts Manager",
            "description": "Praesent in libero vel enim finibus vulputate. Maecenas dui mi, pharetra non lectus quis, rutrum faucibus ante. Nulla tristique eros nisi, sed sollicitudin diam efficitur non. Nunc a orci vitae sem egestas auctor non imperdiet enim. Pellentesque dignissim gravida purus, id sollicitudin ante hendrerit luctus. Donec tincidunt commodo neque, et volutpat odio rutrum eu. Nullam in pulvinar nisl. Vestibulum mollis, ipsum in sollicitudin rhoncus, felis libero imperdiet ipsum, feugiat sodales diam."
          }, {
            "id": 3,
            "title": "Product Manager",
            "description": "Duis placerat, massa vitae hendrerit accumsan, massa risus venenatis lorem, ornare varius diam odio id ipsum. Maecenas nibh est, sollicitudin eget enim vel, semper mollis diam. Donec semper bibendum elit, in scelerisque nisi accumsan vitae. Suspendisse potenti. Proin porta suscipit mi ut placerat. Nulla sed lacinia lacus. Mauris pharetra sagittis leo, vitae pulvinar eros consequat eget."
          }, {
            "id": 8,
            "title": "Senior Vice President of Marketing and Sales",
            "description": "Vivamus pretium sed magna quis sodales. Nulla aliquet nulla sit amet velit condimentum, at consequat urna tincidunt. Nam pretium erat id purus dapibus, nec semper mauris finibus. Fusce pharetra libero tellus, vel sodales purus pellentesque non. Nam sapien tortor, tempor vitae elit sit amet, dignissim feugiat leo. In nec laoreet quam, sit amet eleifend nibh. Quisque rutrum consectetur turpis ac pharetra. Mauris pulvinar ut dui sed imperdie"
          }
        ]
      }
    ])
    .catch(err => console.error(err))

  image
    .insertMany([
      {
        "description": "Images for employee feed",
        "images-folder": "https://techi.envivent.com/employees/",
        "employees": [
          {
            "id": 1,
            "light": "allef-vinicius-light.png",
            "full": "allef-vinicius.jpg"
          }, {
            "id": 2,
            "light": "brook-cagle-light.png",
            "full": "brook-cagle.jpg"
          }, {
            "id": 3,
            "light": "fayard-nicolas-light.png",
            "full": "fayard-nicolas.jpg"
          }, {
            "id": 4,
            "light": "hasana-ayubu-light.png",
            "full": "hasana-ayubu.jpg"
          }, {
            "id": 5,
            "light": "jake-young-light.png",
            "full": "jake-young.jpg"
          }, {
            "id": 6,
            "light": "michelangelo-buonarroti-light.png",
            "full": "michelangelo-buonarroti.jpg"
          }, {
            "id": 7,
            "light": "moiraine-damodred-light.png",
            "full": "moiraine-damodred.jpg"
          }, {
            "id": 8,
            "light": "rand-althor-light.png",
            "full": "rand-althor.jpg"
          }
        ]
      }
    ])
    .catch(err => console.error(err))

  name
    .insertMany([
      {
        "description": "Names for employee feed",
        "employees": [
          {
            "id": 1,
            "first_name": "Allef",
            "last_name": "Vinicius"
          }, {
            "id": 2,
            "first_name": "Brook",
            "last_name": "Cagle"
          }, {
            "id": 3,
            "first_name": "Fayard",
            "last_name": "Nicolas"
          }, {
            "id": 4,
            "first_name": "Hasana",
            "last_name": "Ayubu"
          }, {
            "id": 5,
            "first_name": "Jake",
            "last_name": "Young"
          }, {
            "id": 6,
            "first_name": "Michelangelo",
            "last_name": "Buonarroti"
          }, {
            "id": 7,
            "first_name": "Moiraine",
            "last_name": "Damodred"
          }, {
            "id": 8,
            "first_name": "Rand",
            "last_name": "Al'Thor"
          }
        ]
      }
    ])
    .catch(err => console.error(err))
    .then(() => db.close())
})
