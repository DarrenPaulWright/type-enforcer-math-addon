# Type Enforcer Math Addon

> An addon for type-enforcer with Math related data types and enforcer functions
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="Point"></a>

### Point

* [Point](#Point)
    * [new Point([x], [y])](#new_Point_new)
    * _instance_
        * [.set(x, y)](#Point+set) ⇒ <code>this</code>
        * [.toString([suffix])](#Point+toString) ⇒ <code>String</code>
        * [.isSame(point2)](#Point+isSame) ⇒ <code>Boolean</code>
        * [.add(point2)](#Point+add) ⇒ <code>Boolean</code>
        * [.subtract(point2)](#Point+subtract) ⇒ <code>Boolean</code>
        * [.distance()](#Point+distance) ⇒ <code>Number</code>
        * [.angle()](#Point+angle) ⇒ <code>Boolean</code>
        * [.pointAtDistance(angle, distance)](#Point+pointAtDistance) ⇒ <code>Boolean</code>
        * [.clone()](#Point+clone) ⇒ <code>Boolean</code>
    * _static_
        * [.isValid(value)](#Point.isValid) ⇒ <code>boolean</code>


<br><a name="new_Point_new"></a>

#### new Point([x], [y])
> Point model with helper methods


| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code>, <code>Array</code>, <code>Object</code> | <code>0</code> | 
| [y] | <code>Number</code> | <code>0</code> | 

**Example**  
``` javascript

<br><a name="Point+set"></a>

#### point.set(x, y) ⇒ <code>this</code>
> Set x and y


| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| y | <code>Number</code> | 


<br><a name="Point+toString"></a>

#### point.toString([suffix]) ⇒ <code>String</code>
> Get the point as a string with an optional suffix


| Param | Type |
| --- | --- |
| [suffix] | <code>String</code> | 


<br><a name="Point+isSame"></a>

#### point.isSame(point2) ⇒ <code>Boolean</code>
> Determine if another point is the same as this one


| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 


<br><a name="Point+add"></a>

#### point.add(point2) ⇒ <code>Boolean</code>
> Adds the coordinates of another point to this one and returns a new point


| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 


<br><a name="Point+subtract"></a>

#### point.subtract(point2) ⇒ <code>Boolean</code>
> Subtracts the coordinates of another point from this one and returns a new point


| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 


<br><a name="Point+distance"></a>

#### point.distance() ⇒ <code>Number</code>
> Finds the distance from point to origin


<br><a name="Point+angle"></a>

#### point.angle() ⇒ <code>Boolean</code>
> Finds the angle to this point from origin


<br><a name="Point+pointAtDistance"></a>

#### point.pointAtDistance(angle, distance) ⇒ <code>Boolean</code>
> Returns a new point at a specific angle and distance from this point


| Param | Type |
| --- | --- |
| angle | <code>Number</code> | 
| distance | <code>Number</code> | 


<br><a name="Point+clone"></a>

#### point.clone() ⇒ <code>Boolean</code>
> Get a clone of this point


<br><a name="Point.isValid"></a>

#### Point.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid point


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


[npm]: https://img.shields.io/npm/v/type-enforcer-math-addon.svg
[npm-url]: https://npmjs.com/package/type-enforcer-math-addon
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math-addon.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer-math-addon
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer-math-addon/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer-math-addon?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer-math-addon.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer-math-addon
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-math-addon
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-math-addon
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math-addon/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-math-addon?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-math-addon.svg
[license-url]: https://npmjs.com/package/type-enforcer-math-addon/LICENSE.md