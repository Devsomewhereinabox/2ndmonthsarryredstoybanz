const totalImages = 41; 

const photoArray = [];
for (let i = 1; i <= totalImages; i++) {
    photoArray.push(`images/photo-${i}.png`);
}

const poemsData = [
  {
    title: `[love is more thicker than forget]`,
    author: `E. E. Cummings`,
    poem: `love is more thicker than forget
more thinner than recall
more seldom than a wave is wet
more frequent than to fail

it is most mad and moonly
and less it shall unbe
than all the sea which only
is deeper than the sea

love is less always than to win
less never than alive
less bigger than the least begin
less littler than forgive

it is most sane and sunly
and more it cannot die
than all the sky which only
is higher than the sky`
  },
  {
    title: `How do I love thee? Let me count the ways`,
    author: `Elizabeth Barrett Browning`,
    poem: `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.
I love thee to the level of every day’s
Most quiet need, by sun and candle-light.
I love thee freely, as men strive for right;
I love thee purely, as they turn from praise.
I love thee with the passion put to use
In my old griefs, and with my childhood’s faith.
I love thee with a love I seemed to lose
With my lost saints. I love thee with the breath,
Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.`
  },
  {
    title: `A Red, Red Rose`,
    author: `Robert Burns`,
    poem: `O my Luve is like a red, red rose
   That’s newly sprung in June;
O my Luve is like the melody
   That’s sweetly played in tune.

So fair art thou, my bonnie lass,
   So deep in luve am I;
And I will luve thee still, my dear,
   Till a’ the seas gang dry.

Till a’ the seas gang dry, my dear,
   And the rocks melt wi’ the sun;
I will love thee still, my dear,
   While the sands o’ life shall run.

And fare thee weel, my only luve!
   And fare thee weel awhile!
And I will come again, my luve,
   Though it were ten thousand mile.`
  },
  {
    title: `When I Heard at the Close of the Day`,
    author: `Walt Whitman`,
    poem: `When I heard at the close of the day how my name had been receiv’d with plaudits in the capitol, still it was not a happy night for me that follow’d,
And else when I carous’d, or when my plans were accomplish’d, still I was not happy,
But the day when I rose at dawn from the bed of perfect health, refresh’d, singing, inhaling the ripe breath of autumn,
When I saw the full moon in the west grow pale and disappear in the morning light,
When I wander’d alone over the beach, and undressing bathed, laughing with the cool waters, and saw the sun rise,
And when I thought how my dear friend my lover was on his way coming, O then I was happy,
O then each breath tasted sweeter, and all that day my food nourish’d me more, and the beautiful day pass’d well,
And the next came with equal joy, and with the next at evening came my friend,
And that night while all was still I heard the waters roll slowly continually up the shores,
I heard the hissing rustle of the liquid and sands as directed to me whispering to congratulate me,
For the one I love most lay sleeping by me under the same cover in the cool night,
In the stillness in the autumn moonbeams his face was inclined toward me,
And his arm lay lightly around my breast – and that night I was happy.`
  },
  {
    title: `She Walks in Beauty`,
    author: `Lord Byron`,
    poem: `She walks in beauty, like the night
Of cloudless climes and starry skies;
And all that’s best of dark and bright
Meet in her aspect and her eyes;
Thus mellowed to that tender light
Which heaven to gaudy day denies.

One shade the more, one ray the less,
Had half impaired the nameless grace
Which waves in every raven tress,
Or softly lightens o’er face;
Where thoughts serenely sweet express,
How pure, how dear their dwelling-place.

And on that cheek, and o’er that brow,
So soft, so calm, yet eloquent,
The smiles that win, the tints that glow,
But tell of days in goodness spent,
A mind at peace with all below,
A heart whose love is innocent!`
  },
  {
    title: `On Love`,
    author: `Kahlil Gibran`,
    poem: `Then said Almitra, Speak to us of Love.
     And he raised his head and looked upon
the people, and there fell a stillness upon
them. And with a great voice he said:
     When love beckons to you, follow him,
     Though his ways are hard and steep.
     And when his wings enfold you yield to
him,
     Though the sword hidden among his
pinions may wound you.
     And when he speaks to you believe in
him,
     Though his voice may shatter your dreams
as the north wind lays waste the garden.

     For even as love crowns you so shall he
crucify you. Even as he is for your growth
so is he for your pruning.
     Even as he ascends to your height and
caresses your tenderest branches that quiver
in the sun,
     So shall he descend to your roots and
shake them in their clinging to the earth.
                                       •
     Like sheaves of corn he gathers you unto
himself.
     He threshes you to make you naked.
     He sifts you to free you from your husks.
     He grinds you to whiteness.
     He kneads you until you are pliant;
     And then he assigns you to his sacred
fire, that you may become sacred bread for
God’s sacred feast.

     All these things shall love do unto you
that you may know the secrets of your
heart, and in that knowledge become a
fragment of Life’s heart.

     But if in your fear you would seek only
love’s peace and love’s pleasure,
     Then it is better for you that you cover
your nakedness and pass out of love’s
threshing-floor,
     Into the seasonless world where you
shall laugh, but not all of your laughter,
and weep, but not all of your tears.
                                      •
     Love gives naught but itself and takes
naught but from itself.
     Love possesses not nor would it be
possessed;
     For love is sufficient unto love.

     When you love you should not say,
“God is in my heart,” but rather, “I am
in the heart of God.”
     And think not you can direct the course
of love, for love, if it finds you worthy,
directs your course.

     Love has no other desire but to fulfil
itself.
     But if you love and must needs have
desires, let these be your desires:
     To melt and be like a running brook
that sings its melody to the night.
     To know the pain of too much tenderness.
     To be wounded by your own under-
standing of love;
     And to bleed willingly and joyfully.
     To wake at dawn with a winged heart
and give thanks for another day of loving;
     To rest at the noon hour and meditate
love’s ecstasy;
     To return home at eventide with grati-
tude;
     And then to sleep with a prayer for the
beloved in your heart and a song of praise
upon your lips.`
  },
  {
    title: `Love`,
    author: `Samuel Taylor Coleridge`,
    poem: `All thoughts, all passions, all delights,
Whatever stirs this mortal frame,
All are but ministers of Love,
And feed his sacred flame.

Oft in my waking dreams do I
Live o'er again that happy hour,
When midway on the mount I lay,
Beside the ruined tower.

The moonshine, stealing o'er the scene
Had blended with the lights of eve;
And she was there, my hope, my joy,
My own dear Genevieve!

She leant against the arm{'e}d man,
The statue of the arm{'e}d knight;
She stood and listened to my lay,
Amid the lingering light.

Few sorrows hath she of her own,
My hope! my joy! my Genevieve!
She loves me best, whene'er I sing
The songs that make her grieve.

I played a soft and doleful air,
I sang an old and moving story—
An old rude song, that suited well
That ruin wild and hoary.

She listened with a flitting blush,
With downcast eyes and modest grace;
For well she knew, I could not choose
But gaze upon her face.

I told her of the Knight that wore
Upon his shield a burning brand;
And that for ten long years he wooed
The Lady of the Land.

I told her how he pined: and ah!
The deep, the low, the pleading tone
With which I sang another's love,
Interpreted my own.

She listened with a flitting blush,
With downcast eyes, and modest grace;
And she forgave me, that I gazed
Too fondly on her face!

But when I told the cruel scorn
That crazed that bold and lovely Knight,
And that he crossed the mountain-woods,
Nor rested day nor night;

That sometimes from the savage den,
And sometimes from the darksome shade,
And sometimes starting up at once
In green and sunny glade,—

There came and looked him in the face
An angel beautiful and bright;
And that he knew it was a Fiend,
This miserable Knight!

And that unknowing what he did,
He leaped amid a murderous band,
And saved from outrage worse than death
The Lady of the Land!

And how she wept, and clasped his knees;
And how she tended him in vain—
And ever strove to expiate
The scorn that crazed his brain;—

And that she nursed him in a cave;
And how his madness went away,
When on the yellow forest-leaves
A dying man he lay;—

His dying words—but when I reached
That tenderest strain of all the ditty,
My faltering voice and pausing harp
Disturbed her soul with pity!

All impulses of soul and sense
Had thrilled my guileless Genevieve;
The music and the doleful tale,
The rich and balmy eve;

And hopes, and fears that kindle hope,
An undistinguishable throng,
And gentle wishes long subdued,
Subdued and cherished long!

She wept with pity and delight,
She blushed with love, and virgin-shame;
And like the murmur of a dream,
I heard her breathe my name.

Her bosom heaved—she stepped aside,
As conscious of my look she stepped—
Then suddenly, with timorous eye
She fled to me and wept.

She half enclosed me with her arms,
She pressed me with a meek embrace;
And bending back her head, looked up,
And gazed upon her face.

'Twas partly love, and partly fear,
And partly 'twas a bashful art,
That I might rather feel, than see,
The swelling of her heart.

I calmed her fears, and she was calm,
And told her love with virgin pride;
And so I won my Genevieve,
My bright and beauteous Bride.`
  },
  {
    title: `(“Love has crept...”`,
    author: `D. H. Lawrence`,
    poem: `Love has crept into her sealed heart
As a field bee, black and amber,
Breaks from the winter-cell, to clamber
Up the warm grass where the sunbeams start.

Love has crept into her summery eyes,
And a glint of colored sunshine brings
Such as his along the folded wings
Of the bee before he flies.

But I with my ruffling, impatient breath
Have loosened the wings of the wild young sprite;
He has opened them out in a reeling flight,
And down her words he hasteneth.

Love flies delighted in her voice:
The hum of his glittering, drunken wings
Sets quivering with music the little things
That she says, and her simple words rejoice.`
  },
  {
    title: `Drink to me only with thine eyes”`,
    author: `Ben Jonson`,
    poem: `Drink to me only with thine eyes,
         And I will pledge with mine;
Or leave a kiss but in the cup,
         And I’ll not look for wine.
The thirst that from the soul doth rise
         Doth ask a drink divine;
But might I of Jove’s nectar sup,
         I would not change for thine.

I sent thee late a rosy wreath,
         Not so much honouring thee
As giving it a hope, that there
         It could not withered be.
But thou thereon didst only breathe,
         And sent’st it back to me;
Since when it grows, and smells, I swear,
         Not of itself, but thee.`
  },
  {
    title: `Sonnet 65: Since brass, nor stone, nor earth, nor boundless sea`,
    author: `William Shakespeare`,
    poem: `Since brass, nor stone, nor earth, nor boundless sea
But sad mortality o’er-sways their power,
How with this rage shall beauty hold a plea,
Whose action is no stronger than a flower?
O, how shall summer’s honey breath hold out
Against the wrackful siege of batt’ring days,
When rocks impregnable are not so stout,
Nor gates of steel so strong, but time decays?
O fearful meditation! where, alack,
Shall time’s best jewel from time’s chest lie hid?
Or what strong hand can hold his swift foot back?
Or who his spoil of beauty can forbid?
   O, none, unless this miracle have might,
   That in black ink my love may still shine bright.`
  },
  {
    title: `I loved you first: but afterwards your love`,
    author: `Christina Rossetti`,
    poem: `Poca favilla gran fiamma seconda. – Dante

            Ogni altra cosa, ogni pensier va fore,
            E sol ivi con voi rimansi amore. – Petrarca

I loved you first: but afterwards your love
Outsoaring mine, sang such a loftier song
As drowned the friendly cooings of my dove.
Which owes the other most? my love was long,
And yours one moment seemed to wax more strong;
I loved and guessed at you, you construed me
And loved me for what might or might not be –
Nay, weights and measures do us both a wrong.
For verily love knows not ‘mine’ or ‘thine;’
With separate ‘I’ and ‘thou’ free love has done,
For one is both and both are one in love:
Rich love knows nought of ‘thine that is not mine;’
Both have the strength and both the length thereof,
Both of us, of the love which makes us one.`
  },
  {
    title: `I Knew a Woman`,
    author: `Theodore Roethke`,
    poem: `I knew a woman, lovely in her bones,
When small birds sighed, she would sigh back at them;   
Ah, when she moved, she moved more ways than one:   
The shapes a bright container can contain!
Of her choice virtues only gods should speak,
Or English poets who grew up on Greek
(I’d have them sing in chorus, cheek to cheek).

How well her wishes went! She stroked my chin,   
She taught me Turn, and Counter-turn, and Stand;   
She taught me Touch, that undulant white skin;   
I nibbled meekly from her proffered hand;   
She was the sickle; I, poor I, the rake,
Coming behind her for her pretty sake
(But what prodigious mowing we did make).

Love likes a gander, and adores a goose:
Her full lips pursed, the errant note to seize;
She played it quick, she played it light and loose;   
My eyes, they dazzled at her flowing knees;   
Her several parts could keep a pure repose,   
Or one hip quiver with a mobile nose
(She moved in circles, and those circles moved).

Let seed be grass, and grass turn into hay:   
I’m martyr to a motion not my own;
What’s freedom for? To know eternity.
I swear she cast a shadow white as stone.   
But who would count eternity in days?
These old bones live to learn her wanton ways:   
(I measure time by how a body sways).`
  },
  {
    title: `i love you to the moon &`,
    author: `Chen Chen`,
    poem: `not back, let’s not come back, let’s go by the speed of 
queer zest & stay up 
there & get ourselves a little 
moon cottage (so pretty), then start a moon garden 

with lots of moon veggies (so healthy), i mean 
i was already moonlighting 
as an online moonologist 
most weekends, so this is the immensely 

logical next step, are you 
packing your bags yet, don’t forget your 
sailor moon jean jacket, let’s wear 
our sailor moon jean jackets while twirling in that lighter,

queerer moon gravity, let’s love each other 
(so good) on the moon, let’s love 
the moon        
on the moon`
  },
  {
    title: `When You Are Old`,
    author: `William Butler Yeats`,
    poem: `When you are old and grey and full of sleep,
And nodding by the fire, take down this book,
And slowly read, and dream of the soft look
Your eyes had once, and of their shadows deep;

How many loved your moments of glad grace,
And loved your beauty with love false or true,
But one man loved the pilgrim soul in you,
And loved the sorrows of your changing face;

And bending down beside the glowing bars,
Murmur, a little sadly, how Love fled
And paced upon the mountains overhead
And hid his face amid a crowd of stars.`
  },
  {
    title: `Lines Depicting Simple Happiness`,
    author: `Peter Gizzi`,
    poem: `The shine on her buckle took precedence in sun
Her shine, I should say, could take me anywhere
It feels right to be up this close in tight wind
It feels right to notice all the shiny things about you
About you there is nothing I wouldn’t want to know
With you nothing is simple yet nothing is simpler
About you many good things come into relation
I think of proofs and grammar, vowel sounds, like
A is for knee socks, E for panties
I is for buttondown, O the blouse you wear
U is for hair clip, and Y your tight skirt
The music picks up again, I am the man I hope to be
The bright air hangs freely near your newly cut hair
It is so easy now to see gravity at work in your face
Easy to understand time, that dark process
To accept it as a beautiful process, your face`
  },
  {
    title: `A Glimpse`,
    author: `Walt Whitman`,
    poem: `A glimpse through an interstice caught,
Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, and I unremark’d seated in a corner,
Of a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand,
A long while amid the noises of coming and going, of drinking and oath and smutty jest,
There we two, content, happy in being together, speaking little, perhaps not a word.`
  },
  {
    title: `A Memory of Us`,
    author: `Safia Elhillo`,
    poem: `when i think of us i think of the lakewater
near longtown, what might not technically
constitute a lake but i prefer that word for
the open mouth of its vowel, how it called
us to its throat & held us there, in the sun,
the high points of our faces slick with light
& its arc around our shoulders, the soft
gathering of flesh around our knees,
the lone chair we found near the shore
where we took turns posing, jutting out
an eloquent hip, cackling in the bright language
of flowers for whom i downloaded an app
& learned their names: beautyberry, yarrow,
cornus florida, black-eyed susan, & you,
& you, my bright hibiscus, my every color`
  },
  {
    title: `Of Love`,
    author: `Robert Herrick`,
    poem: `How Love came in, I do not know,
Whether by th’ eye, or eare, or no:
Or whether with the soule it came
(At first) infused with the same:
Whether in part ‘tis here or there,
Or, like the soule, whole every where:
This troubles me: but as I well
As any other, this can tell;
That when from hence she does depart,
The out-let then is from the heart.`
  },
  {
    title: `I Love You`,
    author: `Ella Wheeler Wilcox`,
    poem: `I love your lips when they’re wet with wine
And red with a wild desire;
I love your eyes when the lovelight lies
Lit with a passionate fire.
I love your arms when the warm white flesh
Touches mine in a fond embrace;
I love your hair when the strands enmesh
Your kisses against my face.

Not for me the cold, calm kiss
Of a virgin’s bloodless love;
Not for me the saint’s white bliss,
Nor the heart of a spotless dove.
But give me the love that so freely gives
And laughs at the whole world’s blame,
With your body so young and warm in my arms,
It sets my poor heart aflame.

So kiss me sweet with your warm wet mouth,
Still fragrant with ruby wine,
And say with a fervor born of the South
That your body and soul are mine.
Clasp me close in your warm young arms,
While the pale stars shine above,
And we’ll live our whole young lives away
In the joys of a living love.`
  },
  {
    title: `First Kiss`,
    author: `Kim Addonizio`,
    poem: `Afterwards you had that drunk, drugged look
my daughter used to get, when she had let go
of my nipple, her mouth gone slack and her eyes   
turned vague and filmy, as though behind them   
the milk was rising up to fill her
whole head, that would loll on the small
white stalk of her neck so I would have to hold her   
closer, amazed at the sheer power
of satiety, which was nothing like the needing
to be fed, the wild flailing and crying until she fastened   
herself to me and made the seal tight
between us, and sucked, drawing the liquid down   
and out of my body; no, this was the crowning
moment, this giving of herself, knowing
she could show me how helpless
she was—that’s what I saw, that night when you   
pulled your mouth from mine and
leaned back against a chain-link fence,
in front of a burned-out church: a man
who was going to be that vulnerable,
that easy and impossible to hurt.`
  },
  {
    title: `[Lying in bed I think about you]`,
    author: `Joshua Beckman`,
    poem: `Lying in bed I think about you,
your ugly empty airless apartment
and your eyes. It’s noon, and tired
I look into the rest of the awake day
incapable of even awe, just
a presence of particle and wave,
just that closed and deliberate
human observance. Your thin fingers
and the dissolution of all ability. Lay   
open now to only me that white body,
and I will, as the awkward butterfly,
land quietly upon you. A grace and
staying. A sight and ease. A spell
entangled. A span. I am inside you.
And so both projected, we are now
part of a garden, that is part of a   
landscape, that is part of a world
that no one believes in.`
  },
  {
    title: `Dear One Absent This Long While`,
    author: `Lisa Olstein`,
    poem: `It has been so wet stones glaze in moss;
everything blooms coldly.

I expect you. I thought one night it was you
at the base of the drive, you at the foot of the stairs,

you in a shiver of light, but each time
leaves in wind revealed themselves,

the retreating shadow of a fox, daybreak.
We expect you, cat and I, bluebirds and I, the stove.

In May we dreamed of wreaths burning on bonfires
over which young men and women leapt.

June efforts quietly.
I’ve planted vegetables along each garden wall

so even if spring continues to disappoint
we can say at least the lettuce loved the rain.

I have new gloves and a new hoe.
I practice eulogies. He was a hawk
with white feathered legs. She had the quiet ribs
of a salamander crossing the old pony post road.

Yours is the name the leaves chatter
at the edge of the unrabbited woods.`
  },
  {
    title: `The day is gone, and all its sweets are gone!`,
    author: `John Keats`,
    poem: `The day is gone, and all its sweets are gone!
Sweet voice, sweet lips, soft hand, and softer breast,
Warm breath, light whisper, tender semi-tone,
Bright eyes, accomplish’d shape, and lang’rous waist!
Faded the flower and all its budded charms,
Faded the sight of beauty from my eyes,
Faded the shape of beauty from my arms,
Faded the voice, warmth, whiteness, paradise –
Vanish’d unseasonably at shut of eve,
When the dusk holiday – or holinight
Of fragrant-curtain’d love begins to weave
The woof of darkness thick, for hid delight,
But, as I’ve read love’s missal through to-day,
He’ll let me sleep, seeing I fast and pray.`
  },
  {
    title: `This`,
    author: `Ralph Angel`,
    poem: `Today, my love,
leaves are thrashing the wind
just as pedestrians are erecting again the buildings of this drab
forbidding city,
and our lives, as I lose track of them,
are the lives of others derailing in time and
getting things done.
Impossible to make sense of any one face
or mouth, though
each distance
is clear, and you are miles
from here.
Let your pure
space crowd my heart,
that we might stay awhile longer amid the flying
debris.
This moment,
I swear it,
isn't going anywhere.`
  },
  {
    title: `The Orange`,
    author: `Wendy Cope`,
    poem: `At lunchtime I bought a huge orange—
The size of it made us all laugh.
I peeled it and shared it with Robert and Dave—
They got quarters and I had a half.

And that orange, it made me so happy,
As ordinary things often do
Just lately. The shopping. A walk in the park.
This is peace and contentment. It’s new.

The rest of the day was quite easy.
I did all the jobs on my list
And enjoyed them and had some time over.
I love you. I’m glad I exist.`
  },
  {
    title: `[i carry your heart with me(i carry it in]`,
    author: `E. E. Cummings`,
    poem: `i carry your heart with me(i carry it in
my heart)i am never without it(anywhere
i go you go,my dear;and whatever is done
by only me is your doing,my darling)
                                                      i fear
no fate(for you are my fate,my sweet)i want
no world(for beautiful you are my world,my true)
and it’s you are whatever a moon has always meant
and whatever a sun will always sing is you

here is the deepest secret nobody knows
(here is the root of the root and the bud of the bud
and the sky of the sky of a tree called life;which grows
higher than soul can hope or mind can hide)
and this is the wonder that's keeping the stars apart

i carry your heart(i carry it in my heart)`
  },
  {
    title: `Love Sonnet XVII`,
    author: `Pablo Neruda`,
    poem: `I do not love you as if you were salt-rose, or topaz,
or the arrow of carnations the fire shoots off.
I love you as certain dark things are to be loved,
in secret, between the shadow and the soul.

I love you as the plant that never blooms
but carries in itself the light of hidden flowers;
thanks to your love a certain solid fragrance,
risen from the earth, lives darkly in my body.

I love you without knowing how, or when, or from where.
I love you straightforwardly, without complexities or pride;
so I love you because I know no other way

than this: where I does not exist, nor you,
so close that your hand on my chest is my hand,
so close that your eyes close as I fall asleep.`
  },
  {
    title: `The Good-Morrow`,
    author: `John Donne`,
    poem: `I wonder, by my troth, what thou and I
Did, till we loved? Were we not weaned till then?
But sucked on country pleasures, childishly?
Or snorted we in the Seven Sleepers’ den?
’Twas so; but this, all pleasures fancies be.
If ever any beauty I did see,
Which I desired, and got, ’twas but a dream of thee.

And now good-morrow to our waking souls,
Which watch not one another out of fear;
For love, all love of other sights controls,
And makes one little room an everywhere.
Let sea-discoverers to new worlds have gone,
Let maps to other, worlds on worlds have shown,
Let us possess one world, each hath one, and is one.

My face in thine eye, thine in mine appears,
And true plain hearts do in the faces rest;
Where can we find two better hemispheres,
Without sharp north, without declining west?
Whatever dies, was not mixed equally;
If our two loves be one, or, thou and I
Love so alike, that none do slacken, none can die.`
  },
  {
    title: `[somewhere i have never travelled,gladly beyond]`,
    author: `E. E. Cummings`,
    poem: `somewhere i have never travelled,gladly beyond
any experience,your eyes have their silence:
in your most frail gesture are things which enclose me, 
or which i cannot touch because they are too near

your slightest look easily will unclose me
though i have closed myself as fingers, 
you open always petal by petal myself as Spring opens
(touching skilfully,mysteriously)her first rose

or if your wish be to close me,i and 
my life will shut very beautifully,suddenly,
as when the heart of this flower imagines
the snow carefully everywhere descending;

nothing which we are to perceive in this world equals 
the power of your intense fragility:whose texture
compels me with the colour of its countries,
rendering death and forever with each breathing

(i do not know what it is about you that closes
and opens;only something in me understands
the voice of your eyes is deeper than all roses)
nobody,not even the rain,has such small hands`
  },
  {
    title: `Sonnet 116: Let me not to the marriage of true minds`,
    author: `William Shakespeare`,
    poem: `Let me not to the marriage of true minds
Admit impediments; love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixèd mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come.
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom:
If this be error and upon me proved,
I never writ, nor no man ever loved.`
  },
  {
    title: `Don’t Hesitate`,
    author: `Mary Oliver`,
    poem: `If you suddenly and unexpectedly feel joy,
don’t hesitate. Give in to it. There are plenty
of lives and whole towns destroyed or about
to be. We are not wise, and not very often
kind. And much can never be redeemed.
Still, life has some possibility left. Perhaps this
is its way of fighting back, that sometimes
something happens better than all the riches
or power in the world. It could be anything,
but very likely you notice it in the instant
when love begins. Anyway, that’s often the case.
Anyway, whatever it is, don’t be afraid
of its plenty. Joy is not made to be a crumb.`
  },
  {
    title: `Having A Coke With You`,
    author: `Frank O'Hara`,
    poem: `is even more fun than going to San Sebastian, Irún, Hendaye, Biarritz, Bayonne
or being sick to my stomach on the Travesera de Gracia in Barcelona
partly because in your orange shirt you look like a better happier St. Sebastian
partly because of my love for you, partly because of your love for yoghurt
partly because of the fluorescent orange tulips around the birches
partly because of the secrecy our smiles take on before people and statuary
it is hard to believe when I’m with you that there can be anything as still
as solemn as unpleasantly definitive as statuary when right in front of it
in the warm New York 4 o’clock light we are drifting back and forth
between each other like a tree breathing through its spectacles


and the portrait show seems to have no faces in it at all, just paint
you suddenly wonder why in the world anyone ever did them
I look
at you and I would rather look at you than all the portraits in the world
except possibly for the Polish Rider occasionally and anyway it’s in the Frick
which thank heavens you haven’t gone to yet so we can go together the first time
and the fact that you move so beautifully more or less takes care of Futurism
just as at home I never think of the Nude Descending a Staircase or
at a rehearsal a single drawing of Leonardo or Michelangelo that used to wow me
and what good does all the research of the Impressionists do them
when they never got the right person to stand near the tree when the sun sank
or for that matter Marino Marini when he didn’t pick the rider as carefully
as the horse
it seems they were all cheated of some marvellous experience
which is not going to go wasted on me which is why I’m telling you about it`
  }
];


let currentPhotoIndex = -1;

const backgroundTextDiv = document.getElementById('background-text');
const mainContent = document.getElementById('main-content');
const poemContent = document.getElementById('poem-content');
const loveButton = document.getElementById('love-button');
const closeButton = document.getElementById('close-button');

const poemText = document.getElementById('poem-text');
const poemTitle = document.getElementById('poem-title');
const poemAuthor = document.getElementById('poem-author');

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    if (poemsData.length > 0) {
        buildBackgroundMask(poemsData);
        changeBackgroundPhoto();
    } else {
        console.error("Error: poemsData is empty.");
    }
});

function buildBackgroundMask(poems) {
    const fullText = poems.map(p => p.poem).join(' ');
    backgroundTextDiv.textContent = fullText.repeat(8);
}

function changeBackgroundPhoto() {
    if (photoArray.length === 0) return;
    
    let newIndex;
    if (photoArray.length === 1) {
        newIndex = 0;
    } else {
        do {
            newIndex = Math.floor(Math.random() * photoArray.length);
        } while (newIndex === currentPhotoIndex);
    }
    
    currentPhotoIndex = newIndex;
    backgroundTextDiv.style.backgroundImage = `url('${photoArray[currentPhotoIndex]}')`;
}

loveButton.addEventListener('click', () => {
    if (poemsData.length === 0) return;

    const randomIndex = Math.floor(Math.random() * poemsData.length);
    const selectedPoem = poemsData[randomIndex];

    poemText.textContent = selectedPoem.poem;
    poemTitle.textContent = selectedPoem.title;
    poemAuthor.textContent = selectedPoem.author;

    mainContent.classList.add('fade-out');
    backgroundTextDiv.classList.add('blurred');
    
    setTimeout(() => {
        poemContent.classList.remove('hidden');
        poemContent.classList.add('visible');
    }, 400);
});

// Exit the poem
closeButton.addEventListener('click', () => {
    poemContent.classList.remove('visible');
    poemContent.classList.add('hidden');

    setTimeout(() => {
        changeBackgroundPhoto();
        mainContent.classList.remove('fade-out');
        backgroundTextDiv.classList.remove('blurred');
    }, 400);
});