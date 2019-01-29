# Redirect Nginx Generator

## Easily create nginx redirects from a csv file

### How to use

```
npm i -g redirect-nginx-generator
redirect-nginx-generator <csvfile> <outFile>
```

or 

```
npx redirect-nginx-generator <csvfile> <outFile>
```
### Parameters

| name  | required | note  |
| ------------ | ------------ | ------------ | 
 **`csvfile`** | ✔  | The csv of origin. It must have as a delimiter **`;`**  |
 **`out`** | ✔  | The destination file where the generated redirects will be saved |

### Example

```
npx redirect-nginx-generator ./redirects.csv ./out/redirects.conf
```
**In the folder example there is an example csv file with its relative result**