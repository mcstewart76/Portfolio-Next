import {defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
{
  name: 'name',
  title: 'Name',
  type: 'string',
},
{
  name: 'role',
  title: 'Role',
  type: 'string',
},
{
  name: 'heroImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
},
},
{
  name: 'aboutMeInfo',
  title: 'About Me Info',
  type: 'text',
},
{
  name: 'profilePicture',
  title: 'Profile Picture',
  type: 'image',
  options: {
    hotspot: true,
}
},
{
  name: 'phoneNumber',
  title: 'Phone Number',
  type: 'string',
},
{
  name: 'email',
  title: 'Email',
  type: 'string',
},
{
  name: 'address',
  title: 'Address',
  type: 'string',
},
{
  name: 'socials',
  title: 'Socials',
  type: 'array',
  of: [{type: 'reference', to: [{type: 'social'}]}],
},
  ],

})
