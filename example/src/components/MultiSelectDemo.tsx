import React, { useState } from 'react';
//@ts-ignore
import { MultiSelect, MultiSelectOption } from '@capgeminiuk/dcx-react-library';

const multiSelectOptions: MultiSelectOption[] = [
  'Aaliyah',
  'Aarushi',
  'Abagail',
  'Abbey',
  'Abbi',
  'Abbie',
  'Abby',
  'Abi',
  'Abia',
  'Abigail',
  'Aby',
  'Acacia',
  'Ada',
  'Adalia',
  'Adalyn',
  'Addie',
  'Addison',
  'Adelaide',
  'Adele',
  'Adelia',
  'Adelina',
  'Adeline',
  'Adreanna',
  'Adriana',
  'Adrianna',
  'Adrianne',
  'Adrienne',
  'Aerona',
  'Agatha',
  'Aggie',
  'Agnes',
  'Aida',
  'Aileen',
  'Aimee',
  'Aine',
  'Ainsleigh',
  'Ainsley',
  'Aisha',
  'Aisling',
  'Aislinn',
  'Alaina',
  'Alana',
  'Alanis',
  'Alanna',
  'Alannah',
  'Alayah',
  'Alayna',
  'Alba',
  'Alberta',
  'Aleah',
  'Alecia',
  'Aleisha',
  'Alejandra',
  'Alena',
  'Alessandra',
  'Alessia',
  'Alex',
  'Alexa',
  'Alexandra',
  'Alexandria',
  'Alexia',
  'Alexis',
  'Alexus',
  'Ali',
  'Alia',
  'Alice',
  'Alicia',
  'Alina',
  'Alisa',
  'Alisha',
  'Alison',
  'Alissa',
  'Alivia',
  'Aliyah',
  'Alize',
  'Alka',
  'Allie',
  'Allison',
  'Ally',
  'Allyson',
  'Alma',
  'Alondra',
  'Alycia',
  'Alyshialynn',
  'Alyson',
  'Alyssa',
  'Alyssia',
  'Amalia',
  'Amanda',
  'Amani',
  'Amara',
  'Amari',
  'Amaris',
  'Amaya',
  'Amber',
  'Amberly',
  'Amelia',
  'Amelie',
  'America',
  'Amethyst',
  'Amie',
  'Amina',
  'Amirah',
  'Amity',
  'Amy',
  'Amya',
  'Ana',
  'Anabel',
  'Anabelle',
  'Anahi',
  'Anais',
  'Anamaria',
  'Ananya',
  'Anastasia',
  'Andie',
  'Andrea',
  'Andromeda',
  'Angel',
  'Angela',
  'Angelia',
  'Angelica',
  'Angelina',
  'Angeline',
  'Angelique',
  'Angie',
  'Anika',
  'Anisa',
  'Anita',
  'Aniya',
  'Aniyah',
  'Anjali',
  'Ann',
  'Anna',
  'Annabel',
  'Annabella',
  'Annabelle',
  'Annabeth',
  'Annalisa',
  'Annalise',
  'Anne',
  'Anneke',
  'Annemarie',
  'Annette',
  'Annie',
  'Annika',
  'Annmarie',
  'Anthea',
  'Antoinette',
  'Antonia',
  'Anuja',
  'Anusha',
  'Anushka',
  'Anya',
  'Aoibhe',
  'Aoibheann',
  'Aoife',
  'Aphrodite',
  'Apple',
  'April',
  'Aqua',
  'Arabella',
  'Aria',
  'Ariadne',
  'Ariana',
  'Arianna',
  'Arianne',
  'Ariel',
  'Ariella',
  'Arielle',
  'Arisha',
  'Arleen',
  'Arlene',
  'Artemis',
  'Arwen',
  'Arya',
  'Asha',
  'Ashanti',
  'Ashlee',
  'Ashleigh',
  'Ashley',
  'Ashlie',
  'Ashlyn',
  'Ashlynn',
  'Ashton',
  'Ashvini',
  'Asia',
  'Asma',
  'Aspen',
  'Astrid',
  'Athena',
  'Aubree',
  'Aubrey',
  'Audra',
  'Audrey',
  'Audrina',
  'Augustina',
  'Aurelia',
  'Aurora',
  'Autumn',
  'Ava',
  'Avalon',
  'Avery',
  'Avril',
  'Aya',
  'Ayana',
  'Ayanna',
  'Ayesha',
  'Ayisha',
  'Ayla',
  'Azalea',
  'Azaria',
  'Azariah',
  'Bailey',
  'Barbara',
  'Barbie',
  'Bay',
  'Baylee',
  'Bea',
  'Beatrice',
  'Beatrix',
  'Becca',
  'Beccy',
  'Becky',
  'Belinda',
  'Bella',
  'Bellatrix',
  'Belle',
  'Benita',
  'Bernadette',
  'Bernice',
  'Bertha',
  'Beryl',
  'Bess',
  'Beth',
  'Bethan',
  'Bethanie',
  'Bethany',
  'Betsy',
  'Bettina',
  'Betty',
  'Beverly',
  'Beyonce',
  'Bianca',
  'Billie',
  'Blair',
  'Blaire',
  'Blake',
  'Blanche',
  'Bliss',
  'Bloom',
  'Blossom',
  'Blythe',
  'Bobbi',
  'Bobbie',
  'Bonita',
  'Bonnie',
  'Bonquesha',
  'Braelyn',
  'Brandi',
  'Brandy',
  'Braylee',
  'Brea',
  'Breanna',
  'Bree',
  'Breeze',
  'Brenda',
  'Brenna',
  'Bria',
  'Briana',
  'Brianna',
  'Brianne',
  'Briar',
  'Bridget',
  'Bridgette',
  'Bridie',
  'Briella',
  'Brielle',
  'Brigid',
  'Briley',
  'Brinley',
  'Briony',
  'Brisa',
  'Britney',
  'Britt',
  'Brittany',
  'Brittney',
  'Brogan',
  'Bronte',
  'Bronwen',
  'Bronwyn',
  'Brooke',
  'Brooklyn',
  'Brooklynn',
  'Bryanna',
  'Brylee',
  'Bryn',
  'Brynlee',
  'Brynn',
  'Bryony',
  'Bunty',
  'Cadence',
  'Cailin',
  'Caitlan',
  'Caitlin',
  'Caitlyn',
  'Caleigh',
  'Cali',
  'Callie',
  'Calliope',
  'Callista',
  'Calypso',
  'Cambria',
  'Cameron',
  'Cami',
  'Camila',
  'Camilla',
  'Camille',
  'Camryn',
  'Candace',
  'Candice',
  'Candis',
  'Candy',
  'Caoimhe',
  'Caprice',
  'Cara',
  'Carina',
  'Caris',
  'Carissa',
  'Carla',
  'Carley',
  'Carlie',
  'Carly',
  'Carlynn',
  'Carmel',
  'Carmela',
  'Carmen',
  'Carol',
  'Carole',
  'Carolina',
  'Caroline',
  'Carolyn',
  'Carrie',
  'Carter',
  'Carys',
  'Casey',
  'Cassandra',
  'Cassia',
  'Cassidy',
  'Cassie',
  'Cat',
  'Cate',
  'Caterina',
  'Cathalina',
  'Catherine',
  'Cathleen',
  'Cathy',
  'Catlin',
  'Catrina',
  'Catriona',
  'Cayla',
  'Cecelia',
  'Cecilia',
  'Cecily',
  'Celeste',
  'Celestia',
  'Celestine',
  'Celia',
  'Celina',
  'Celine',
  'Cerys',
  'Chanel',
  'Chanelle',
  'Chantal',
  'Chantelle',
  'Charis',
  'Charissa',
  'Charity',
  'Charlene',
  'Charley',
  'Charlie',
  'Charlize',
  'Charlotte',
  'Charmaine',
  'Chastity',
  'Chelsea',
  'Chelsey',
  'Chenille',
  'Cher',
  'Cheri',
  'Cherie',
  'Cherry',
  'Cheryl',
  'Cheyanne',
  'Cheyenne',
  'Chiara',
  'Chloe',
  'Chris',
  'Chrissy',
  'Christa',
  'Christabel',
  'Christal',
  'Christen',
  'Christi',
  'Christiana',
  'Christie',
  'Christina',
  'Christine',
  'Christy',
  'Chrystal',
  'Ciara',
  'Cici',
  'Ciel',
  'Cierra',
  'Cindy',
  'Claire',
  'Clara',
  'Clarabelle',
  'Clare',
  'Clarice',
  'Claris',
  'Clarissa',
  'Clarisse',
  'Clarity',
  'Clary',
  'Claudette',
  'Claudia',
  'Claudine',
  'Clea',
  'Clementine',
  'Cleo',
  'Clodagh',
  'Clotilde',
  'Clover',
  'Coco',
  'Colette',
  'Colleen',
  'Connie',
  'Constance',
  'Cora',
  'Coral',
  'Coralie',
  'Coraline',
  'Cordelia',
  'Cori',
  'Corina',
  'Corinne',
  'Cornelia',
  'Corra',
  'Cosette',
  'Courtney',
  'Cressida',
  'Cristina',
  'Crystal',
  'Cynthia',
  'Dagmar',
  'Dahlia',
  'Daisy',
  'Dakota',
  'Dana',
  'Danette',
  'Dani',
  'Danica',
  'Daniela',
  'Daniella',
  'Danielle',
  'Danika',
  'Daphne',
  'Dara',
  'Darby',
  'Darcey',
  'Darcie',
  'Darcy',
  'Daria',
  'Darla',
  'Darlene',
  'Dasia',
  'Davida',
  'Davina',
  'Dawn',
  'Dayna',
  'Daysha',
  'Deana',
  'Deandra',
  'Deann',
  'Deanna',
  'Deanne',
  'Deb',
  'Debbie',
  'Debby',
  'Debora',
  'Deborah',
  'Debra',
  'Dee',
  'Deedee',
  'Deena',
  'Deidre',
  'Deirdre',
  'Deja',
  'Delaney',
  'Delanie',
  'Delia',
  'Delilah',
  'Della',
  'Delores',
  'Delphine',
  'Demetria',
  'Demi',
  'Dena',
  'Denise',
  'Denny',
  'Desiree',
  'Destinee',
  'Destiny',
  'Diamond',
  'Diana',
  'Diane',
  'Dianna',
  'Dianne',
  'Dido',
  'Dina',
  'Dionne',
  'Dior',
  'Dixie',
  'Dolly',
  'Dolores',
  'Dominique',
  'Donna',
  'Dora',
  'Doreen',
  'Doris',
  'Dorothy',
  'Dot',
  'Drew',
  'Dulce',
  'Eabha',
  'Ebony',
  'Echo',
  'Eden',
  'Edie',
  'Edith',
  'Edna',
  'Edwina',
  'Effie',
  'Eileen',
  'Eilidh',
  'Eimear',
  'Elaina',
  'Elaine',
  'Elana',
  'Eleanor',
  'Electra',
  'Elektra',
  'Elena',
  'Eliana',
  'Elin',
  'Elina',
  'Elisa',
  'Elisabeth',
  'Elise',
  'Eliza',
  'Elizabeth',
  'Ella',
  'Elle',
  'Ellen',
  'Ellery',
  'Ellie',
  'Ellis',
  'Elly',
  'Elodie',
  'Eloise',
  'Elora',
  'Elsa',
  'Elsie',
  'Elspeth',
  'Elva',
  'Elvira',
  'Elysia',
  'Elyza',
  'Emanuela',
  'Ember',
  'Emelda',
  'Emely',
  'Emer',
  'Emerald',
  'Emerson',
  'Emilee',
  'Emilia',
  'Emilie',
  'Emily',
  'Emma',
  'Emmaline',
  'Emmalyn',
  'Emmanuelle',
  'Emmeline',
  'Emmie',
  'Emmy',
  'Enya',
  'Erica',
  'Erika',
  'Erin',
  'Eris',
  'Eryn',
  'Esmay',
  'Esme',
  'Esmeralda',
  'Esperanza',
  'Estee',
  'Estelle',
  'Ester',
  'Esther',
  'Estrella',
  'Ethel',
  'Eugenie',
  'Eunice',
  'Eva',
  'Evangeline',
  'Eve',
  'Evelin',
  'Evelyn',
  'Everly',
  'Evie',
  'Evita',
  'Fabrizia',
  'Faith',
  'Fallon',
  'Fanny',
  'Farah',
  'Farrah',
  'Fatima',
  'Fawn',
  'Fay',
  'Faye',
  'Felicia',
  'Felicity',
  'Fern',
  'Fernanda',
  'Ffion',
  'Fifi',
  'Fiona',
  'Fleur',
  'Flor',
  'Flora',
  'Florence',
  'Fran',
  'Frances',
  'Francesca',
  'Francine',
  'Frankie',
  'Freda',
  'Freya',
  'Frida',
  'Gabby',
  'Gabriela',
  'Gabriella',
  'Gabrielle',
  'Gail',
  'Gayle',
  'Gaynor',
  'Geena',
  'Gemma',
  'Gena',
  'Genesis',
  'Genevieve',
  'Georgette',
  'Georgia',
  'Georgie',
  'Georgina',
  'Geraldine',
  'Gert',
  'Gertrude',
  'Gia',
  'Gianna',
  'Gigi',
  'Gillian',
  'Gina',
  'Ginger',
  'Ginny',
  'Giovanna',
  'Giselle',
  'Gisselle',
  'Gladys',
  'Glenda',
  'Glenys',
  'Gloria',
  'Golda',
  'Grace',
  'Gracelyn',
  'Gracie',
  'Grainne',
  'Greta',
  'Gretchen',
  'Griselda',
  'Guadalupe',
  'Guinevere',
  'Gwen',
  'Gwendolyn',
  'Gwyneth',
  'Habiba',
  'Hadley',
  'Hailee',
  'Hailey',
  'Haleigh',
  'Haley',
  'Halle',
  'Hallie',
  'Hanna',
  'Hannah',
  'Harley',
  'Harmony',
  'Harper',
  'Harriet',
  'Hattie',
  'Haven',
  'Hayden',
  'Haylee',
  'Hayley',
  'Hazel',
  'Hazeline',
  'Heather',
  'Heaven',
  'Heidi',
  'Helen',
  'Helena',
  'Helene',
  'Helga',
  'Helina',
  'Henrietta',
  'Hepsiba',
  'Hera',
  'Hermione',
  'Hester',
  'Hetty',
  'Hilary',
  'Hilda',
  'Hollie',
  'Holly',
  'Honesty',
  'Honey',
  'Honor',
  'Honour',
  'Hope',
  'Hyacinth',
  'Ianthe',
  'Ida',
  'Ila',
  'Ilene',
  'Iliana',
  'Ilona',
  'Ilse',
  'Imani',
  'Imelda',
  'Imogen',
  'India',
  'Indie',
  'Indigo',
  'Indira',
  'Ines',
  'Ingrid',
  'Iona',
  'Ira',
  'Irene',
  'Irina',
  'Iris',
  'Irma',
  'Isa',
  'Isabel',
  'Isabella',
  'Isabelle',
  'Isha',
  'Isis',
  'Isla',
  'Isobel',
  'Isolde',
  'Itzel',
  'Ivana',
  'Ivy',
  'Iyanna',
  'Izabella',
  'Izidora',
  'Izzy',
  'Jacinda',
  'Jacinta',
  'Jackie',
  'Jacqueline',
  'Jacquelyn',
  'Jada',
  'Jade',
  'Jaden',
  'Jadyn',
  'Jaelynn',
  'Jaida',
  'Jaime',
  'Jamie',
  'Jamiya',
  'Jan',
  'Jana',
  'Jancis',
  'Jane',
  'Janelle',
  'Janessa',
  'Janet',
  'Janette',
  'Janice',
  'Janie',
  'Janine',
  'Janis',
  'Janiya',
  'January',
  'Jaqueline',
  'Jasmin',
  'Jasmine',
  'Jaya',
  'Jayda',
  'Jayden',
  'Jayla',
  'Jaylinn',
  'Jaylynn',
  'Jayne',
  'Jazlyn',
  'Jazmin',
  'Jazmine',
  'Jean',
  'Jeanette',
  'Jeanine',
  'Jeanne',
  'Jeannette',
  'Jeannie',
  'Jeannine',
  'Jemima',
  'Jemma',
  'Jen',
  'Jena',
  'Jenelle',
  'Jenessa',
  'Jenna',
  'Jenni',
  'Jennie',
  'Jennifer',
  'Jenny',
  'Jensen',
  'Jeri',
  'Jerri',
  'Jess',
  'Jessa',
  'Jessica',
  'Jessie',
  'Jet',
  'Jewel',
  'Jill',
  'Jillian',
  'Jo',
  'Joan',
  'Joann',
  'Joanna',
  'Joanne',
  'Jocelyn',
  'Jodi',
  'Jodie',
  'Jody',
  'Joelle',
  'Johanna',
  'Joleen',
  'Jolene',
  'Jolie',
  'Joni',
  'Jordan',
  'Jordana',
  'Jordyn',
  'Jorja',
  'Joselyn',
  'Josephine',
  'Josie',
  'Joy',
  'Joyce',
  'Juanita',
  'Judith',
  'Judy',
  'Jules',
  'Julia',
  'Juliana',
  'Julianna',
  'Julianne',
  'Julie',
  'Juliet',
  'Juliette',
  'Julissa',
  'July',
  'June',
  'Juno',
  'Justice',
  'Justina',
  'Justine',
  'Kacey',
  'Kadence',
  'Kaidence',
  'Kailey',
  'Kailyn',
  'Kaitlin',
  'Kaitlyn',
  'Kaitlynn',
  'Kalea',
  'Kaleigh',
  'Kali',
  'Kalia',
  'Kamala',
  'Kamryn',
  'Kara',
  'Karen',
  'Kari',
  'Karin',
  'Karina',
  'Karissa',
  'Karla',
  'Karlee',
  'Karly',
  'Karolina',
  'Karyn',
  'Kasey',
  'Kassandra',
  'Kassidy',
  'Kassie',
  'Kat',
  'Katara',
  'Katarina',
  'Kate',
  'Katelyn',
  'Katelynn',
  'Katerina',
  'Katharine',
  'Katherine',
  'Kathleen',
  'Kathryn',
  'Kathy',
  'Katia',
  'Katie',
  'Katlyn',
  'Katniss',
  'Katrina',
  'Katy',
  'Katya',
  'Kay',
  'Kaya',
  'Kaye',
  'Kayla',
  'Kaylee',
  'Kayleigh',
  'Kayley',
  'Kaylie',
  'Kaylin',
  'Keara',
  'Keeley',
  'Keely',
  'Keira',
  'Keisha',
  'Kelis',
  'Kelley',
  'Kelli',
  'Kellie',
  'Kelly',
  'Kelsey',
  'Kelsie',
  'Kendall',
  'Kendra',
  'Kenna',
  'Kennedy',
  'Kenzie',
  'Keri',
  'Kerian',
  'Kerri',
  'Kerry',
  'Kia',
  'Kiana',
  'Kiara',
  'Kiera',
  'Kierra',
  'Kiersten',
  'Kiki',
  'Kiley',
  'Kim',
  'Kimberlee',
  'Kimberley',
  'Kimberly',
  'Kimbriella',
  'Kimmy',
  'Kinley',
  'Kinsey',
  'Kinsley',
  'Kira',
  'Kirsten',
  'Kirstin',
  'Kirsty',
  'Kitty',
  'Kizzy',
  'Kloe',
  'Kora',
  'Kori',
  'Kourtney',
  'Kris',
  'Krista',
  'Kristen',
  'Kristi',
  'Kristie',
  'Kristin',
  'Kristina',
  'Kristine',
  'Kristy',
  'Krystal',
  'Kyla',
  'Kylee',
  'Kyleigh',
  'Kylie',
  'Kyra',
  'Lacey',
  'Lacie',
  'Lacy',
  'Ladonna',
  'Laila',
  'Lakyn',
  'Lala',
  'Lana',
  'Laney',
  'Lara',
  'Larissa',
  'Latoya',
  'Laura',
  'Laurel',
  'Lauren',
  'Laurie',
  'Lauryn',
  'Lavana',
  'Lavender',
  'Lavinia',
  'Layla',
  'Lea',
  'Leah',
  'Leandra',
  'Leann',
  'Leanna',
  'Leanne',
  'Lee',
  'Leela',
  'Leena',
  'Leia',
  'Leigh',
  'Leila',
  'Leilani',
  'Lela',
  'Lena',
  'Lenore',
  'Leona',
  'Leonie',
  'Leora',
  'Lesley',
  'Leslie',
  'Lesly',
  'Leticia',
  'Lettie',
  'Lexi',
  'Lexia',
  'Lexie',
  'Lexis',
  'Lia',
  'Liana',
  'Lianne',
  'Libby',
  'Liberty',
  'Lidia',
  'Liesl',
  'Lila',
  'Lilac',
  'Lilah',
  'Lili',
  'Lilian',
  'Liliana',
  'Lilita',
  'Lilith',
  'Lillian',
  'Lillie',
  'Lilly',
  'Lily',
  'Lina',
  'Linda',
  'Lindsay',
  'Lindsey',
  'Lindy',
  'Lisa',
  'Lisette',
  'Liv',
  'Livia',
  'Livvy',
  'Liz',
  'Liza',
  'Lizbeth',
  'Lizette',
  'Lizzie',
  'Lizzy',
  'Logan',
  'Lois',
  'Lola',
  'Lolita',
  'London',
  'Lora',
  'Loran',
  'Lorelei',
  'Loren',
  'Lorena',
  'Loretta',
  'Lori',
  'Lorie',
  'Lorna',
  'Lorraine',
  'Lorri',
  'Lorrie',
  'Lottie',
  'Lotus',
  'Lou',
  'Louisa',
  'Louise',
  'Luann',
  'Lucia',
  'Luciana',
  'Lucie',
  'Lucille',
  'Lucinda',
  'Lucky',
  'Lucy',
  'Luisa',
  'Lulu',
  'Luna',
  'Lupita',
  'Luz',
  'Lydia',
  'Lyla',
  'Lynda',
  'Lyndsey',
  'Lynette',
  'Lynn',
  'Lynne',
  'Lynnette',
  'Lynsey',
  'Lyra',
  'Lyric',
  'Mabel',
  'Macey',
  'Macie',
  'Mackenzie',
  'Macy',
  'Madalyn',
  'Maddie',
  'Maddison',
  'Maddy',
  'Madeleine',
  'Madeline',
  'Madelyn',
  'Madison',
  'Madisyn',
  'Madyson',
  'Mae',
  'Maeve',
  'Magda',
  'Magdalena',
  'Magdalene',
  'Maggie',
  'Maia',
  'Maire',
  'Mairead',
  'Maisie',
  'Maisy',
  'Maja',
  'Makayla',
  'Makenna',
  'Makenzie',
  'Malia',
  'Malinda',
  'Mallory',
  'Malory',
  'Mandy',
  'Manuela',
  'Mara',
  'Marcela',
  'Marcella',
  'Marci',
  'Marcia',
  'Marcy',
  'Margaret',
  'Margarita',
  'Margaux',
  'Margie',
  'Margo',
  'Margot',
  'Margret',
  'Maria',
  'Mariah',
  'Mariam',
  'Marian',
  'Mariana',
  'Marianna',
  'Marianne',
  'Maribel',
  'Marie',
  'Mariela',
  'Marilyn',
  'Marina',
  'Marion',
  'Marisa',
  'Marisol',
  'Marissa',
  'Maritza',
  'Marjorie',
  'Marla',
  'Marlee',
  'Marlene',
  'Marley',
  'Marnie',
  'Marsha',
  'Martha',
  'Martina',
  'Mary',
  'Maryam',
  'Maryann',
  'Marybeth',
  'Masie',
  'Matilda',
  'Maude',
  'Maura',
  'Maureen',
  'Mavis',
  'Maxine',
  'May',
  'Maya',
  'Mazie',
  'Mckayla',
  'Mckenna',
  'Mckenzie',
  'Mea',
  'Meadow',
  'Meagan',
  'Meera',
  'Meg',
  'Megan',
  'Meghan',
  'Mei',
  'Mel',
  'Melanie',
  'Melina',
  'Melinda',
  'Melissa',
  'Melody',
  'Mercedes',
  'Mercy',
  'Meredith',
  'Merida',
  'Meryl',
  'Mia',
  'Michaela',
  'Michele',
  'Michelle',
  'Mika',
  'Mikaela',
  'Mikayla',
  'Mikhaela',
  'Mila',
  'Mildred',
  'Milena',
  'Miley',
  'Millicent',
  'Millie',
  'Milly',
  'Mimi',
  'Mina',
  'Mindy',
  'Minerva',
  'Minnie',
  'Mira',
  'Miracle',
  'Miranda',
  'Miriam',
  'Missie',
  'Misty',
  'Mitzi',
  'Moira',
  'Mollie',
  'Molly',
  'Mona',
  'Monica',
  'Monika',
  'Monique',
  'Montana',
  'Morgan',
  'Morgana',
  'Moya',
  'Muriel',
  'Mya',
  'Myfanwy',
  'Myla',
  'Myra',
  'Myrna',
  'Nadene',
  'Nadia',
  'Nadine',
  'Naja',
  'Nala',
  'Nana',
  'Nancy',
  'Nanette',
  'Naomi',
  'Natalia',
  'Natalie',
  'Natasha',
  'Naya',
  'Nayeli',
  'Nell',
  'Nellie',
  'Nelly',
  'Nena',
  'Nerissa',
  'Nessa',
  'Nevaeh',
  'Neve',
  'Nia',
  'Niamh',
  'Nichola',
  'Nichole',
  'Nicki',
  'Nicky',
  'Nicola',
  'Nicole',
  'Nicolette',
  'Nieve',
  'Niki',
  'Nikita',
  'Nikki',
  'Nila',
  'Nina',
  'Nishka',
  'Noelle',
  'Nola',
  'Nora',
  'Norah',
  'Noreen',
  'Norma',
  'Nova',
  'Nyla',
  'Oasis',
  'Ocean',
  'Octavia',
  'Odalis',
  'Odele',
  'Odelia',
  'Odette',
  'Olga',
  'Olive',
  'Olivia',
  'Oonagh',
  'Opal',
  'Ophelia',
  'Oriana',
  'Orianna',
  'Orla',
  'Orlaith',
  'Page',
  'Paige',
  'Paisley',
  'Paloma',
  'Pam',
  'Pamela',
  'Pandora',
  'Pansy',
  'Paola',
  'Paris',
  'Patience',
  'Patrice',
  'Patricia',
  'Patsy',
  'Patti',
  'Patty',
  'Paula',
  'Paulette',
  'Paulina',
  'Pauline',
  'Payton',
  'Pearl',
  'Peggy',
  'Penelope',
  'Penny',
  'Perla',
  'Perrie',
  'Persephone',
  'Petra',
  'Petunia',
  'Peyton',
  'Phillipa',
  'Philomena',
  'Phoebe',
  'Phoenix',
  'Phyllis',
  'Piper',
  'Pippa',
  'Pixie',
  'Polly',
  'Poppy',
  'Portia',
  'Precious',
  'Presley',
  'Preslie',
  'Primrose',
  'Princess',
  'Priscilla',
  'Priya',
  'Promise',
  'Prudence',
  'Prue',
  'Queenie',
  'Quiana',
  'Quinn',
  'Rabia',
  'Rachael',
  'Rachel',
  'Rachelle',
  'Rae',
  'Raegan',
  'Raelyn',
  'Raina',
  'Raine',
  'Ramona',
  'Ramsha',
  'Randi',
  'Rani',
  'Rania',
  'Raquel',
  'Raven',
  'Raya',
  'Rayna',
  'Rayne',
  'Reagan',
  'Reanna',
  'Reanne',
  'Rebecca',
  'Rebekah',
  'Reese',
  'Regan',
  'Regina',
  'Reilly',
  'Reina',
  'Remi',
  'Rena',
  'Renata',
  'Rene',
  'Renee',
  'Renesmee',
  'Reyna',
  'Rhea',
  'Rhian',
  'Rhianna',
  'Rhiannon',
  'Rhoda',
  'Rhona',
  'Rhonda',
  'Ria',
  'Rianna',
  'Ricki',
  'Rihanna',
  'Rikki',
  'Riley',
  'Rita',
  'River',
  'Riya',
  'Roanne',
  'Roberta',
  'Robin',
  'Robyn',
  'Rochelle',
  'Rocio',
  'Roisin',
  'Rolanda',
  'Ronda',
  'Roni',
  'Rosa',
  'Rosalie',
  'Rosalind',
  'Rosalinda',
  'Rosalynn',
  'Rosanna',
  'Rose',
  'Rosella',
  'Rosemarie',
  'Rosemary',
  'Rosetta',
  'Rosie',
  'Rosy',
  'Rowan',
  'Rowena',
  'Roxana',
  'Roxanne',
  'Roxie',
  'Roxy',
  'Rozlynn',
  'Ruby',
  'Rue',
  'Ruth',
  'Rydel',
  'Rylee',
  'Ryleigh',
  'Rylie',
  'Sabina',
  'Sabine',
  'Sabrina',
  'Sade',
  'Sadhbh',
  'Sadie',
  'Saffron',
  'Safire',
  'Safiya',
  'Sage',
  'Sahara',
  'Saige',
  'Saira',
  'Sally',
  'Salma',
  'Salome',
  'Sam',
  'Samantha',
  'Samara',
  'Samia',
  'Samira',
  'Sammie',
  'Sammy',
  'Sandra',
  'Sandy',
  'Saoirse',
  'Sapphire',
  'Sara',
  'Sarah',
  'Sarina',
  'Sariya',
  'Sascha',
  'Sasha',
  'Saskia',
  'Savanna',
  'Savannah',
  'Scarlet',
  'Scarlett',
  'Sebastianne',
  'Selah',
  'Selena',
  'Selene',
  'Selina',
  'Selma',
  'Senuri',
  'September',
  'Seren',
  'Serena',
  'Serenity',
  'Shakira',
  'Shana',
  'Shania',
  'Shannon',
  'Shari',
  'Sharon',
  'Shary',
  'Shauna',
  'Shawn',
  'Shawna',
  'Shawnette',
  'Shayla',
  'Shea',
  'Sheena',
  'Sheila',
  'Shelby',
  'Shelia',
  'Shelley',
  'Shelly',
  'Sheri',
  'Sheridan',
  'Sherri',
  'Sherrie',
  'Sherry',
  'Sheryl',
  'Shirley',
  'Shivani',
  'Shona',
  'Shreya',
  'Shyla',
  'Sian',
  'Sidney',
  'Sienna',
  'Sierra',
  'Sigourney',
  'Silvia',
  'Simone',
  'Simran',
  'Sinead',
  'Siobhan',
  'Sky',
  'Skye',
  'Skylar',
  'Skyler',
  'Sloane',
  'Snow',
  'Sofia',
  'Sofie',
  'Sondra',
  'Sonia',
  'Sonja',
  'Sonya',
  'Sophia',
  'Sophie',
  'Sophy',
  'Spring',
  'Stacey',
  'Staci',
  'Stacie',
  'Stacy',
  'Star',
  'Starla',
  'Stefanie',
  'Stella',
  'Steph',
  'Stephanie',
  'Sue',
  'Suki',
  'Summer',
  'Susan',
  'Susanna',
  'Susannah',
  'Susanne',
  'Susie',
  'Sutton',
  'Suzanna',
  'Suzanne',
  'Suzette',
  'Suzie',
  'Suzy',
  'Sybil',
  'Sydney',
  'Sylvia',
  'Sylvie',
  'Tabatha',
  'Tabitha',
  'Tahlia',
  'Tala',
  'Talia',
  'Taliyah',
  'Tallulah',
  'Tamara',
  'Tamera',
  'Tami',
  'Tamia',
  'Tamika',
  'Tammi',
  'Tammie',
  'Tammy',
  'Tamra',
  'Tamsin',
  'Tania',
  'Tanisha',
  'Tanya',
  'Tara',
  'Taryn',
  'Tasha',
  'Tasmin',
  'Tatiana',
  'Tatum',
  'Tawana',
  'Taya',
  'Tayla',
  'Taylah',
  'Tayler',
  'Taylor',
  'Teagan',
  'Teegan',
  'Tegan',
  'Tenille',
  'Teresa',
  'Teri',
  'Terri',
  'Terrie',
  'Terry',
  'Tess',
  'Tessa',
  'Thalia',
  'Thea',
  'Thelma',
  'Theodora',
  'Theresa',
  'Therese',
  'Thomasina',
  'Tia',
  'Tiana',
  'Tiegan',
  'Tiffany',
  'Tilly',
  'Tina',
  'Toni',
  'Tonia',
  'Tonya',
  'Tori',
  'Tracey',
  'Traci',
  'Tracie',
  'Tracy',
  'Tricia',
  'Trina',
  'Trinity',
  'Trish',
  'Trisha',
  'Trista',
  'Trixie',
  'Trixy',
  'Trudy',
  'Tula',
  'Tyra',
  'Ulrica',
  'Uma',
  'Una',
  'Ursula',
  'Valarie',
  'Valentina',
  'Valeria',
  'Valerie',
  'Vanessa',
  'Veda',
  'Velma',
  'Venetia',
  'Venus',
  'Vera',
  'Verity',
  'Veronica',
  'Vicki',
  'Vickie',
  'Vicky',
  'Victoria',
  'Vienna',
  'Viola',
  'Violet',
  'Violetta',
  'Virginia',
  'Vivian',
  'Viviana',
  'Vivien',
  'Vivienne',
  'Wallis',
  'Wanda',
  'Waverley',
  'Wendi',
  'Wendy',
  'Whitney',
  'Wilhelmina',
  'Willa',
  'Willow',
  'Wilma',
  'Winnie',
  'Winnifred',
  'Winona',
  'Winter',
  'Xandra',
  'Xanthe',
  'Xaviera',
  'Xena',
  'Xia',
  'Ximena',
  'Xochil',
  'Xochitl',
  'Yasmin',
  'Yasmine',
  'Yazmin',
  'Yelena',
  'Yesenia',
  'Yolanda',
  'Ysabel',
  'Yulissa',
  'Yvaine',
  'Yvette',
  'Yvonne',
  'Zada',
  'Zaheera',
  'Zahra',
  'Zaira',
  'Zakia',
  'Zali',
  'Zara',
  'Zaria',
  'Zaya',
  'Zayla',
  'Zelda',
  'Zelida',
  'Zelina',
  'Zena',
  'Zendaya',
  'Zia',
  'Zina',
  'Ziva',
  'Zoe',
  'Zoey',
  'Zola',
  'Zora',
  'Zoya',
  'Zula',
  'Zuri',
  'Zyana',
].map((name: string, index: number) => ({
  id: `id-${index}`,
  label: name,
  value: name,
}));

export const MultiSelectDemo = () => {
  const [selected, setSelected] = useState<string[]>(
    multiSelectOptions
      .filter((_: MultiSelectOption) => _.selected)
      .map((_: MultiSelectOption) => _.label)
  );

  const handleRemove: (selected: string) => void = (value: string) =>
    setSelected((prevState: string[]) =>
      prevState.filter((_: string) => _ !== value)
    );

  const handleSelect: (selected: string) => void = (value: string) => {
    setSelected((prevState: string[]) => [...prevState, value]);
  };

  const handleRemoveAll: () => void = () => {
    setSelected([]);
  };

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <h1>Basic Multi Select</h1>
      <MultiSelect
        id="demo-multi-select"
        inputProperties={{
          placeholder: 'Select...',
          style: {
            border: 'none',
            padding: '3px 8px',
            margin: '2px 6px 2px 0px',
          },
        }}
        resultUlStyle={{
          maxHeight: '400px',
          overflow: 'scroll',
          width: '100%',
          listStyleType: 'none',
          padding: '5px 0',
          border: 'solid 1px #aaa',
        }}
        resultLiStyle={{
          padding: '0 15px',
        }}
        selectOptions={multiSelectOptions}
        selectedListItemStyle={{
          backgroundColor: '#F5F7F8',
          border: '1px solid #C1C7CF',
          borderRadius: '3px',
          padding: '3px 8px',
          margin: '2px 6px 2px 0px',
        }}
        searchContainerStyle={{
          border: '1px solid #A6A6A6',
          padding: '4px 6px',
          borderRadius: '3px',
        }}
        searchDebounceMs={0}
        hintText="Enter your search term to add a selection"
        onRemove={handleRemove}
        onSelect={handleSelect}
        onRemoveAll={handleRemoveAll}
      />
      <h2>Selected</h2>
      <ul>
        {selected.map((_: string, index: number) => (
          <li key={index}>{_}</li>
        ))}
      </ul>
    </div>
  );
};
